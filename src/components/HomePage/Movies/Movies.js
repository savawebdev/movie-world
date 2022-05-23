import Popular from "./Popular/Popular";
import styles from "./Movies.module.css";

const Movies = ({ popularMovies }) => {
  return (
    <section className={styles.movies}>
      <Popular data={popularMovies} />
    </section>
  );
};

export default Movies;
