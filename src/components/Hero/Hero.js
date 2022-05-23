import Overlay from "../Helpers/Overlay/Overlay";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <Overlay />
    </section>
  );
};

export default Hero;
