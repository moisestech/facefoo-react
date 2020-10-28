import "./index.css";

// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENT
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";

// PAGES
import Home from "../Home";

// Component
// State
// Lifecycle
// UI

// Your UI is a function of your state

export default function App() {
  return (
    <div className="app">
      <Home />
    </div>
  );
}
