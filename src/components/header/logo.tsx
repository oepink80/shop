import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
      <img
        src="/images/logo.png"
        alt="Logo"
        height={40}
        style={{ verticalAlign: 'middle' }}
      />
    </Link>
  );
};

export default Logo;
