import { gql } from "@apollo/client";
import Meerkat from '../src/types/Meerkat';
import Movie from '../src/types/Movie';

export const RANDOM_MEERKAT_QUERY = gql`
query randomMeerkat{
  randomMeerkat{
    id
    image
    description
    photoDate
  }
}
`;

export const RANDOM_MOVIE_QUERY = gql`
query randomMovie{
  randomMovie{
    id
    image
    description
    movieDate
  }
}
`;

export interface RandomMeerkatData {
  randomMeerkat: Meerkat;
}

export interface RandomMovieData {
  randomMovie: Movie;
}
