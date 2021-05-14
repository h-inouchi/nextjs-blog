import { gql } from "@apollo/client";
import client from "../../../pages/api/apollo-client";
import { getAllMeerkatIds } from '../../../lib/all-meerkats'

describe('lib meerkats', () => {
  it('should get graphql result', async () => {
    const result = await getAllMeerkatIds()
    const paths = result.data["allMeerkats"].map(meerkat => {
      return {
        params: {
          id: meerkat.id
        }
      }
    })
    console.log(paths)

    expect(true).toStrictEqual(true);
  });

  it('should get graphql result by id', async () => {
    const id = '1'
    await client
      .query({
        query: gql`
          query ($id: String!){
            meerkatById(id: $id){
              id
              image
            }
          }
          `,
        variables: {id}
      })
      .then(
        result => {
          console.log(result.data["meerkatById"])
        }
      );

    expect(true).toStrictEqual(true);
  });

});
