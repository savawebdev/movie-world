import Title from "./Title/Title";
import styles from "./Header.module.css";
import Nav from "./Nav/Nav";
import AuthButtons from "./AuthButtons/AuthButtons";

const Header = () => {
  return (
    <header className={styles.header}>
      <Title />
      <Nav />
      <AuthButtons />
    </header>
  );
};

export default Header;
