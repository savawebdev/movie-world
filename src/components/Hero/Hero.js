import Overlay from "../Helpers/Overlay/Overlay";
import Title from "./Title/Title";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Overlay />
      <Title />
    </section>
  );
};

export default Hero;
