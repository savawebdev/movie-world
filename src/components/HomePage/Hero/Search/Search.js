import Button from "./Button/Button";
import Input from "./Input/Input";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <Input />
      <Button />
    </div>
  );
};

export default Search;
