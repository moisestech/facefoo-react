import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGE
import Home from "./Pages/Home";
import Login from "./pages/Login";
import NotFound from "./Pages/NotFound";

// STATE
// import { useStateValue } from "./state/StateProvider";

// Component
// State
// Lifecycle
// UI

// <Route path="/">{!user ? <Login /> : <Home />}</Route>

function App() {
  // const [{ user }, dispatch] = useStateValue();

  return (
    <Switch>
      <Home />
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
