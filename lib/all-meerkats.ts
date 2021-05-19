import { gql } from "@apollo/client";
import Meerkat from '../src/types/Meerkat';
import Movie from '../src/types/Movie';
import client from "../pages/api/apollo-client";

export const ALL_MEERKATS_QUERY = gql`
  query allMeerkat{
    allMeerkats{
      id
      image
      description
      photoDate
    }
  }
`;

export interface AllMeerkatsData {
  allMeerkats: Meerkat[];
}

export async function getAllMeerkatIds() {
  return await client.query({
    query: gql`
      query Meerkats{
        allMeerkats {
          id
        }
      }
    `
  })
}

export const ALL_MOVIES_QUERY = gql`
  query allMovie{
    allMovies{
      id
      image
      description
      movieDate
    }
  }
`;

export interface AllMoviesData {
  allMovies: Movie[];
}

export async function getAllMovieIds() {
  return await client.query({
    query: gql`
      query Movies{
        allMovies {
          id
        }
      }
    `
  })
}
