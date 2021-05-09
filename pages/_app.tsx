import '../styles/global.css'
import { useEffect } from 'react';
import Head from 'next/head';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Theme from 'src/components/Theme';
import NavBar from 'src/components/layouts/NavBar';

const client = new ApolloClient({
  uri: 'https://meerkat-312510.an.r.appspot.com/graphql/',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ApolloProvider client={client}>
        <ThemeProvider theme={Theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <NavBar />
          <Container maxWidth="lg">
            <Component {...pageProps} />
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
