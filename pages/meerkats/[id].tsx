import Head from "next/head";
import { useRouter } from "next/router";
import PostListItem from 'src/components/posts/PostListItem';
import Grid from "@material-ui/core/Grid";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Layout, { siteTitle } from 'components/layout'
import { getAllMeerkatIds } from 'lib/all-meerkats'

function Meerkat({meerkat, next}) {
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
          <h4>
            {
              new Date(meerkat.photoDate).getFullYear() + '/' +
              new Date(meerkat.photoDate).getMonth() + '/' +
              new Date(meerkat.photoDate).getDate()
            }
          </h4>
          { console.log(meerkat.photoDate) }
          <a href={`/meerkats/${next.id}`}>
            <PostListItem
              {...meerkat}
            />
          </a>
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
  const MEERKAT_QUERY = gql`
  query ($id: String!){
    meerkatPlusNextById(id: $id){
      id
      image
      photoDate
    }
  }
  `;

  const id = params.id;
  const { data } = await client.query({
    query: MEERKAT_QUERY,
    variables: { id }
  })

  return{
    props: {
      meerkat: data.meerkatPlusNextById[0],
      next: data.meerkatPlusNextById[1],
    },
  };
}

export default Meerkat;
