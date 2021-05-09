import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://meerkat-312510.an.r.appspot.com/graphql/',
    fetch
  }),
  cache: new InMemoryCache(),
});


export default client;
