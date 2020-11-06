import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import apolloClient from "./services/apollo";
import { ApolloProvider } from "react-apollo";
import { Router } from "react-router";
import { Route } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
