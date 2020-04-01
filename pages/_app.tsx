import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AppProps } from "next/app";
import fetch from "node-fetch";
import React from "react";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    authorization:
      "Basic Zm5BRG9XaUt3NkFDRV9PMVc3NUxITVY3QzJ0elc0OVhNMlRRTWRHYjpHZW9uSG86c2VydmVy",
  },
  fetch: fetch as any,
  uri: "https://graphql.fauna.com/graphql",
});

export default function ({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
