import { gql } from "@apollo/client";
import Meerkat from '../src/types/Meerkat';

export const ALL_MEERKATS_QUERY = gql`
  query randomMeerkat{
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

