import { Link } from "react-router-dom";
import styles from "./NavLink.module.css";

const NavLink = ({ label, pathName }) => {
  return (
    <li>
      <Link to={pathName} className={styles["nav-link"]}>
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
