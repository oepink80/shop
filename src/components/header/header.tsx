// src/components/Header.tsx

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/system';
import { useSelector } from 'react-redux';

import AuthControls from './authcontrols';
import Logo from './logo';
import NavigationLinks from './navigationlinks';
import SearchField from './searchfield';
import { RootState } from '@/types/types';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const Header = () => {
  const user = useSelector((state: RootState) => state.user); // Прямо берем пользователя
  const loggedIn = Boolean(user); // Логика определения залогинирования остается прежней
  const handleSearchChange = (value: string) => {
    console.log(value); // Позднее реализуешь поиск
  };

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 0.1, display: 'flex', alignItems: 'center' }}>
          <Logo />
        </Box>
        <Box sx={{ flexGrow: 0.6, display: 'flex', alignItems: 'center' }}>
          <SearchField onChange={handleSearchChange} />
        </Box>
        <Box
          sx={{
            flexGrow: 0.25,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <NavigationLinks isLoggedIn={loggedIn} />
          <AuthControls isLoggedIn={loggedIn} />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
