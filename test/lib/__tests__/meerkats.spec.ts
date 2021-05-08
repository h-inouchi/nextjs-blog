import { gql } from "@apollo/client";
import client from "../../../pages/api/apollo-client";

describe('lib meerkats', () => {
  it('should get graphql result', async () => {
    await client
      .query({
        query: gql`
        query Meerkats{
          allMeerkats {
            id
          }
        }
        `
      })
      .then(
        result => console.log(result)
      );

    expect(true).toStrictEqual(true);
  });
});
