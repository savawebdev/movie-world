import Popular from "./Popular/Popular";
import Trending from "./Trending/Trending";
import styles from "./Movies.module.css";

const Movies = ({ popularMovies, trendingMovies }) => {
  return (
    <section className={styles.movies}>
      <Popular data={popularMovies} />
      <Trending data={trendingMovies} />
    </section>
  );
};

export default Movies;
