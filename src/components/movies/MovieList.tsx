import Grid from '@material-ui/core/Grid';
import MovieListItem from 'src/components/movies/MovieListItem';
import { useQuery } from '@apollo/client';
import { RANDOM_MOVIE_QUERY, RandomMovieData } from '../../../lib/random-meerkat';
import { NextPage } from 'next';

interface MovieListProps {}

const MovieList: NextPage<MovieListProps> = () => {
  const { loading, error, data } = useQuery<RandomMovieData>(RANDOM_MOVIE_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;

  const { randomMovie } = data;
  if (!randomMovie) return null;

  return (
    <Grid container alignItems="center" justify="center">
      <Grid key={randomMovie.id} item xs={12} sm={10} md={4} lg={4}>
        <MovieListItem
          {...randomMovie}
        />
        <a href={`/movies/${randomMovie.id}`}>詳細ページへ</a>
      </Grid>
    </Grid>
  );
};

export default MovieList;
