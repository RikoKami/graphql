import React from "react";
import { Route, Switch } from "react-router-dom";
import { Main } from "../Main";

export const App = () => {
  return (
    <React.Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </React.Suspense>
  );
};
