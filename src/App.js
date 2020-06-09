import React from "react";
import "./styles.css";
import Sidebar from "../Components/SideBar";
import TopBar from "../Components/TopBar";
import Content from "../Components/Content";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <TopBar />
        <Content />
      </Router>
    </div>
  );
}
