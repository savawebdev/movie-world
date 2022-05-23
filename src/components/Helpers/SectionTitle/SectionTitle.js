import styles from "./SectionTitle.module.css";

const SectionTitle = ({ label }) => {
  return <h2 className={styles["section-title"]}>{label}</h2>;
};

export default SectionTitle;
