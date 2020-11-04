import React from "react";
import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/apollo";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h1>Apollo client configurado!</h1>
      </div>
    </ApolloProvider>
  );
}

export default App;
