import { NextPage } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import MovieList from 'src/components/movies/MovieList'

interface HomeProps {}

const MoviesPage: NextPage<HomeProps> = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <MovieList />
    </Layout>
  )
}

export default MoviesPage;
