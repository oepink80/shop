import {
  ShoppingCart,
  LocalShipping,
  AccountCircle,
  Newspaper,
} from '@mui/icons-material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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

type NavigationLinksProps = {
  isLoggedIn?: boolean;
};

const NavigationLinks = ({ isLoggedIn }: NavigationLinksProps) => {
  return (
    <>
      <StyledLink to="/news">
        <Newspaper /> Новости
      </StyledLink>
      <StyledLink to="/cart">
        <ShoppingCart /> Корзина
      </StyledLink>
      {isLoggedIn && (
        <>
          <StyledLink to="/checkout">
            <LocalShipping /> Оформление заказа
          </StyledLink>
          <StyledLink to="/account">
            <AccountCircle /> Личный кабинет
          </StyledLink>
        </>
      )}
    </>
  );
};

export default NavigationLinks;
