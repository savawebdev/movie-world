import Overlay from "../Helpers/Overlay/Overlay";
import Search from "./Search/Search";
import Title from "./Title/Title";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Overlay />
      <Title />
      <Search />
    </section>
  );
};

export default Hero;
