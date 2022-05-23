import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}>2022 &copy; Andrei Sava</span>
      <span className={styles["data-attribution"]}>
        Movie data from{" "}
        <a href="https://www.themoviedb.org/" rel="noreferrer" target="_blank">
          TMDB
        </a>
      </span>
    </footer>
  );
};

export default Footer;
