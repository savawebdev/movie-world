import styles from "./AuthButtons.module.css";
import Button from "./Button/Button";

const AuthButtons = () => {
  return (
    <div className={styles["auth-buttons"]}>
      <Button label="Login" pathName="/login" />
      <Button label="Register" pathName="/register" />
    </div>
  );
};

export default AuthButtons;
