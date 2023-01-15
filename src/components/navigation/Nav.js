import "./Nav.scss";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="topnav">
      <Link to="/home" className="active">
        Home
      </Link>
      <Link to="/Products">Products</Link>
      <Link to="/Otp">OTP</Link>
      <Link to="/Weather">Youtube</Link>
    </div>
  );
};
export default Nav;
