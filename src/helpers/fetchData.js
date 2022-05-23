import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

const getPopularMovies = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  return result.data.results;
};

const getTrendingMovies = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );

  return result.data.results;
};

const getNowPlayingMovies = async () => {
  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
  );

  return result.data.results;
};

const fetchData = { getPopularMovies, getTrendingMovies, getNowPlayingMovies };

export default fetchData;
