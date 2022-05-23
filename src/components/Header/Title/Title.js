import styles from "./Title.module.css";

const Title = () => {
  return (
    <span className={styles.title}>
      Movie <span className={styles["title-highlight"]}>World</span>
    </span>
  );
};

export default Title;
