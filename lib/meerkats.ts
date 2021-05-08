import { gql } from "@apollo/client";
import Meerkat from '../src/types/Meerkat';

export const MEERKATS_QUERY = gql`
  query allMeerkats{
    allMeerkats{
      id
      image
      description
      photoDate
    }
  }
`;

export interface MeerkatsData {
  allMeerkats: Meerkat[];
}
