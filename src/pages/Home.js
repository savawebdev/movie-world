import { useEffect, useState } from "react";
import Hero from "../components/HomePage/Hero/Hero";
import Movies from "../components/HomePage/Movies/Movies";
import getPopularMovies from "../helpers/getPopularMovies";

const Home = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopularMovies().then((res) => {
      console.log(res);
      setPopular(res);
    });
  }, []);

  return (
    <>
      <Hero />
      <Movies popularMovies={popular} />
    </>
  );
};

export default Home;
