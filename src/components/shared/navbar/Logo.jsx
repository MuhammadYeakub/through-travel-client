import { Link } from "react-router-dom";
import logoImg from "../../../assets/images/logos.png";
const Logo = () => {
  return (
    <Link to="/">
      <img
        className=""
        src={logoImg}
        alt="parlour-logo"
        width="100"
        height="100"
      />
    </Link>
  );
};

export default Logo;
