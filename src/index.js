import * as React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGE
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

// Component
// State
// Lifecycle
// UI

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
