import Container from "../Container/Container";
import Grid from "../MovieCardsWrapper/MovieCardsWrapper";
import SectionTitle from "../../../Helpers/SectionTitle/SectionTitle";
import MovieCard from "../MovieCard/MovieCard";

const Upcoming = ({ data }) => {
  return (
    <Container>
      <SectionTitle label="Upcoming movies" />
      <Grid>
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default Upcoming;
