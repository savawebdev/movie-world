import { Link } from "react-router-dom";
import styles from "./Button.module.css";

const Button = ({ label, pathName }) => {
  return (
    <Link to={pathName} className={styles.button}>
      {label}
    </Link>
  );
};

export default Button;
