import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchQuery } from '@/store/actions/searchActions';
import { RootState } from '@/types/types';

import AuthControls from './authcontrols';
import Logo from './logo';
import NavigationLinks from './navigationlinks';
import SearchField from './searchfield';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledListItem = styled(ListItem)({
  textAlign: 'left',
  '& a': {
    color: '#333', // Устанавливаем цвет ссылок на темно-серый
  },
  '@media (max-width: 600px)': {
    // Медиазапрос для мобильных устройств
    display: 'block', // Строки будут отображаться вертикально
    width: '100%',
  },
});

const Header = () => {
  const user = useSelector((state: RootState) => state.user); // Пользователь
  const loggedIn = Boolean(user); // Логинимость пользователя
  const [drawerOpen, setDrawerOpen] = useState(false); // Управление состоянием меню гамбургера
  const dispatch = useDispatch();
  const handleSearchChange = (value: string) => {
    dispatch(setSearchQuery(value));
  };

  const toggleDrawer = (open: boolean) => (event: React.SyntheticEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box
          sx={{ display: 'flex', alignItems: 'center', flex: 1, width: '100%' }}
        >
          <Logo />
          <SearchField onChange={handleSearchChange} />
        </Box>
        <Box
          sx={{
            ml: 'auto',
            display: { xs: 'flex', sm: 'none' },
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <NavigationLinks isLoggedIn={loggedIn} />
          <AuthControls isLoggedIn={loggedIn} />
        </Box>
      </Toolbar>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <StyledListItem key={'Навигация'}>
            <NavigationLinks isLoggedIn={loggedIn} />
          </StyledListItem>
          <Divider />
          <StyledListItem key={'Авторизация'}>
            <AuthControls isLoggedIn={loggedIn} />
          </StyledListItem>
        </List>
      </Drawer>
    </StyledAppBar>
  );
};

export default Header;
