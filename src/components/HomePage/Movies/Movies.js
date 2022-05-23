import NowPlaying from "./NowPlaying/NowPlaying";
import Popular from "./Popular/Popular";
import Trending from "./Trending/Trending";
import styles from "./Movies.module.css";

const Movies = ({ popularMovies, trendingMovies, nowPlayingMovies }) => {
  return (
    <section className={styles.movies}>
      <Popular data={popularMovies} />
      <Trending data={trendingMovies} />
      <NowPlaying data={nowPlayingMovies} />
    </section>
  );
};

export default Movies;
