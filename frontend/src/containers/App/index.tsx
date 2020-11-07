import React from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";

export const App = () => {
  const pageTitle = "Graphql - Todolist";
  const pageDescription = "My TodoList";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content="" />
        <meta property="og:url" content={window.location.pathname} />
        <meta property="og:type" content={"page"} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
      </Helmet>
      <React.Suspense fallback={null}>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
      </React.Suspense>
    </>
  );
};
