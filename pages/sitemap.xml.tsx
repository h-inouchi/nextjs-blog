import { GetServerSidePropsContext } from 'next';
import { gql } from "@apollo/client";
import client from "../pages/api/apollo-client";

export const getServerSideProps = async ({ res }: GetServerSidePropsContext) => {
  const xml = await generateSitemapXml();

  res.statusCode = 200;
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.setHeader('Content-Type', 'text/xml');
  res.end(xml);

  return {
    props: {},
  };
};

async function generateSitemapXml(): Promise<string> {
  const meerkats = await client.query({
    query: gql`
      query Meerkats{
        allMeerkats {
          id
          photoDate
        }
      }
    `
  })
  const meerkatIds = meerkats.data["allMeerkats"].map(meerkat => {
    return {
      id: meerkat.id,
      lastmod: meerkat.photoDate
    }
  })
  const movies = await client.query({
    query: gql`
      query Movies{
        allMovies {
          id
          movieDate
        }
      }
    `
  })
  const movieIds = movies.data["allMovies"].map(movie => {
    return {
      id: movie.id,
      lastmod: movie.movieDate
    }
  })
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  xml += `
    <url>
      <loc>https://nextjs-blog-sigma-two-26.vercel.app</loc>
      <lastmod>2021-05-20T21:39:19+00:00</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
  xml += `
    <url>
      <loc>https://nextjs-blog-sigma-two-26.vercel.app/movies</loc>
      <lastmod>2021-05-20T21:39:19+00:00</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `
  meerkatIds.forEach((meerkatId) =>{
    xml += `
      <url>
        <loc>https://nextjs-blog-sigma-two-26.vercel.app/meerkats/${meerkatId.id}</loc>
        <lastmod>${meerkatId.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })
  movieIds.forEach((movieId) =>{
    xml += `
      <url>
        <loc>https://nextjs-blog-sigma-two-26.vercel.app/movies/${movieId.id}</loc>
        <lastmod>${movieId.lastmod}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  })
  
  xml += `</urlset>`;
  return xml;
}

const Page = () => null;
export default Page;
