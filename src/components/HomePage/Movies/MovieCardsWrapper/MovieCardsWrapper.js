import styles from "./MovieCardsWrapper.module.css";

const Grid = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Grid;
