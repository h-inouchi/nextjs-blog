import { NextPage } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import PostList from 'src/components/posts/PostList'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <PostList />
    </Layout>
  )
}

export default Home;
