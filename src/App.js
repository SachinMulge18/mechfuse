import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "./components/LoginPage";

const App = () => {
  return (
    <>
      <h2 className="text-center p-4">MechFuse </h2>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </>
  );
};
export default App;
