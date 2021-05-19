import Head from "next/head";
import { useRouter } from "next/router";
import MovieListItem from 'src/components/movies/MovieListItem';
import Grid from "@material-ui/core/Grid";
import { gql } from "@apollo/client";
import client from "../api/apollo-client";
import Layout, { siteTitle } from 'components/layout'
import { getAllMovieIds } from 'lib/all-meerkats'
import utilStyles from '../../styles/utils.module.css'

function Movie({movie, next}) {
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
        <Grid key={movie.id} item xs={12} sm={10} md={4} lg={4}>
          <h4 className={utilStyles.headingSm}>
            {
              new Date(movie.movieDate).getFullYear() + '/' +
                ("0" + (new Date(movie.movieDate).getMonth() + 1)).slice(-2) + '/' +
                ("0" + new Date(movie.movieDate).getDate()).slice(-2)
            }
          </h4>
          <MovieListItem
            {...movie}
          />            
          <a href={`/movies/${next.id}`}>
            次へ
          </a>
        </Grid>
      </Grid>
    </Layout>
  );
}

export async function getStaticPaths(){
  const result = await getAllMovieIds()
  const paths = result.data["allMovies"].map(movie => {
    return {
      params: {
        id: movie.id
      }
    }
  })
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const MOVIE_QUERY = gql`
  query ($id: String!){
    moviePlusNextById(id: $id){
      id
      image
      movieDate
    }
  }
  `;


  const id = params.id;
  const { data } = await client.query({
    query: MOVIE_QUERY,
    variables: { id }
  })

  return{
    props: {
      movie: data.moviePlusNextById[0],
      next: data.moviePlusNextById[1],
    },
  };
}

export default Movie;
