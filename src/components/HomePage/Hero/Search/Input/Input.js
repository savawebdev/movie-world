import styles from "./Input.module.css";

const Input = () => {
  return (
    <input
      type="text"
      placeholder="Search for movies..."
      className={styles.input}
    />
  );
};

export default Input;
