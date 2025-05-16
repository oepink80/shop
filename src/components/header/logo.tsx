import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Typography
      variant="h6"
      noWrap
      component={Link}
      to="/"
      sx={{ color: "#fff", textDecoration: "none" }}
    >
      Магазин электроники
    </Typography>
  );
};

export default Logo;