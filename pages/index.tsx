import { NextPage } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import PostList from 'src/components/posts/PostList'

interface HomeProps {}

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>ミーアキャットと２人暮らしはじめました。</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <PostList />
      </section>
    </Layout>
  )
}

export default Home;
