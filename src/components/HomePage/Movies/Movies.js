import NowPlaying from "./NowPlaying/NowPlaying";
import Popular from "./Popular/Popular";
import Trending from "./Trending/Trending";
import Upcoming from "./Upcoming/Upcoming";
import styles from "./Movies.module.css";

const Movies = ({
  popularMovies,
  trendingMovies,
  nowPlayingMovies,
  upcomingMovies,
}) => {
  return (
    <section className={styles.movies}>
      <Popular data={popularMovies} />
      <Trending data={trendingMovies} />
      <NowPlaying data={nowPlayingMovies} />
      <Upcoming data={upcomingMovies} />
    </section>
  );
};

export default Movies;
