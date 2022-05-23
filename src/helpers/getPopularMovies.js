import axios from "axios";

const getPopularMovies = async () => {
  const apiKey = process.env.REACT_APP_API_KEY;

  const result = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );

  return result.data.results;
};

export default getPopularMovies;
