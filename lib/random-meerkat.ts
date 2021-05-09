import { gql } from "@apollo/client";
import Meerkat from '../src/types/Meerkat';

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

export interface RandomMeerkatData {
  randomMeerkat: Meerkat;
}
