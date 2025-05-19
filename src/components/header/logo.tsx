import { Link } from 'react-router-dom';

import logoImage from '/images/logo.png';

const Logo = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
      <img
        src={logoImage}
        alt="Logo"
        height={40}
        style={{ verticalAlign: 'middle' }}
      />
    </Link>
  );
};

export default Logo;
