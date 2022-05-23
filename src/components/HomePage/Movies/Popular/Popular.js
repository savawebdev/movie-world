import Container from "../Container/Container";
import Grid from "../MovieCardsWrapper/MovieCardsWrapper";
import SectionTitle from "../../../Helpers/SectionTitle/SectionTitle";
import MovieCard from "../MovieCard/MovieCard";

const Popular = ({ data }) => {
  return (
    <Container>
      <SectionTitle label="Popular movies" />
      <Grid>
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </Grid>
    </Container>
  );
};

export default Popular;
