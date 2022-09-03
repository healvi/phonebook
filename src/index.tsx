import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const client = new ApolloClient({
  uri: "https://wpe-hiring.tokopedia.net/graphql/",
  cache: new InMemoryCache(),
});
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

reportWebVitals();
