import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = ({ label, pathName }) => {
  return (
    <li>
      <Link to={pathName}>{label}</Link>
    </li>
  );
};

export default NavLink;
