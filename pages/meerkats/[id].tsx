import Head from "next/head";
import { useRouter } from "next/router";
import PostListItem from 'src/components/posts/PostListItem';
import Grid from "@material-ui/core/Grid";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Layout, { siteTitle } from 'components/layout'
import { getAllMeerkatIds } from 'lib/all-meerkats'

function Meerkat({meerkat}) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Grid container alignItems="center" justify="center">
        <Grid key={meerkat.id} item xs={12} sm={10} md={4} lg={4}>
          <PostListItem
            {...meerkat}
          />
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticPaths(){
  const result = await getAllMeerkatIds()
  const paths = result.data["allMeerkats"].map(meerkat => {
    return {
      params: {
        id: meerkat.id
      }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const MEERKAT_DATA = gql`
  query ($id: String!){
    meerkatById(id: $id){
      id
      image
    }
  }
  `;

  const id = params.id;
  const { data } = await client.query({
    query: MEERKAT_DATA,
    variables: { id }
  })

  return{
    props: {
      meerkat: data.meerkatById,
    },
  };
}

export default Meerkat;
