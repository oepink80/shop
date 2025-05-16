import { ExitToApp, Lock } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // Экшн для сброса пользователя

import { setUserAction } from '@/store/slices/userSlice';

const StyledDiv = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  cursor: 'pointer',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  '& svg': {
    marginRight: '10px',
  },
}));

const StyledLink = styled(Link)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: '#fff',
  fontFamily: 'Arial, sans-serif',
  textDecoration: 'none',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
  '& svg': {
    marginRight: '10px',
  },
}));

type AuthControlsProps = {
  isLoggedIn: boolean;
};

const AuthControls = ({ isLoggedIn }: AuthControlsProps) => {
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem('user');
    dispatch(setUserAction(null));
  };

  if (!isLoggedIn)
    return (
      <StyledLink
        to="/login"
        style={{ textDecoration: 'none', color: '#fff', fontSize: '16px' }}
      >
        <Lock /> Вход
      </StyledLink>
    );

  return (
    <StyledDiv onClick={logout}>
      <ExitToApp /> Выход
    </StyledDiv>
  );
};

export default AuthControls;
