import { useEffect, useState } from "react";
import fetchData from "../helpers/fetchData";
import Hero from "../components/HomePage/Hero/Hero";
import Movies from "../components/HomePage/Movies/Movies";
import getPopularMovies from "../helpers/getPopularMovies";

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetchData.getPopularMovies().then((res) => {
      setPopular(res);
    });

    fetchData.getTrendingMovies().then((res) => {
      setTrending(res);
    });
  }, []);

  return (
    <>
      <Hero />
      <Movies popularMovies={popular} trendingMovies={trending} />
    </>
  );
};

export default Home;
