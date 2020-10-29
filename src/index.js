import * as React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// PAGE
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

// COMPONENTS
import Login from "./components/Login";

// STATE
import { useStateValue } from "./state/StateProvider";

// Component
// State
// Lifecycle
// UI

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <Switch>
      <Route path="/">{!user ? <Login /> : <Home />}</Route>
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
