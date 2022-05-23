import styles from "./Nav.module.css";
import NavLink from "./NavLink/NavLink";

const Nav = () => {
  return (
    <nav>
      <ul>
        <NavLink label="Home" pathName="/" />
        <NavLink label="Top rated" pathName="/top-rated" />
        <NavLink label="Discover" pathName="/discover" />
      </ul>
    </nav>
  );
};

export default Nav;
