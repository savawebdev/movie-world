import styles from "./MovieCard.module.css";

const MovieCard = ({ data }) => {
  return (
    <div className={styles["movie-card"]}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
        alt={data.title}
        className={styles["movie-card__image"]}
      />
      <span className={styles["movie-card__title"]}>{data.title}</span>
    </div>
  );
};

export default MovieCard;
