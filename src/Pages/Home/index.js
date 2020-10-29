// ROUTER
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// COMPONENT
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Feed from "../../components/Feed";
import Widgets from "../../components/Widgets";

// Your UI is a function of your state

export default function Home() {
  return (
    <div className="home">
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}
