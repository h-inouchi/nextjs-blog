import { NextPage } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import PostList from 'src/components/posts/PostList'
import MeerkatLinks from 'src/components/MeerkatLinks'
import MovieLinks from 'src/components/MovieLinks'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PostList />
      <MeerkatLinks />
      <MovieLinks />
    </Layout>
  )
}

export default Home;
