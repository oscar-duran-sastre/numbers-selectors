import React from "react";
import { Switch, Route } from "react-router-dom";
import ToListNumbers from "../components/ToListNumbers";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <ToListNumbers />
      </Route>
      <Route exact path="/numbers">
        <ToListNumbers />
      </Route>
    </Switch>
  );
}

export default Routes;
