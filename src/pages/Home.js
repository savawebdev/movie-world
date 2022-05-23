import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import Hero from "../components/HomePage/Hero/Hero";
import Movies from "../components/HomePage/Movies/Movies";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    fetchData.getPopularMovies().then((res) => {
      setPopular(res);
    });

    fetchData.getTrendingMovies().then((res) => {
      setTrending(res);
    });

    fetchData.getNowPlayingMovies().then((res) => {
      setNowPlaying(res);
    });

    fetchData.getUpcomingMovies().then((res) => {
      setUpcoming(res);
    });
  }, []);

  return (
    <>
      <Hero />
      <Movies
        popularMovies={popular}
        trendingMovies={trending}
        nowPlayingMovies={nowPlaying}
        upcomingMovies={upcoming}
      />
    </>
  );
};

export default Home;
