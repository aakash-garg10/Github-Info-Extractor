// This index.js is created so that all the components and pages can be exported from one place and we don't have to worry about writitng
// different import statements to require Them.
// Also since we are using index.js as name for the file we don't have to mention it specifically in the require.
// you can find it in pages folder too

import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeConsumer } from "styled-components";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <PrivateRoute path="/" exact>
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
