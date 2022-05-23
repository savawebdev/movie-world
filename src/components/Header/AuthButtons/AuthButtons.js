import styles from "./AuthButtons.module.css";
import Button from "./Button/Button";

const AuthButtons = () => {
  return (
    <div>
      <Button label="Login" />
      <Button label="Register" />
    </div>
  );
};

export default AuthButtons;
