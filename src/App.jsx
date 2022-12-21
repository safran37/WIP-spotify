import React from "react";
import Sidebar from "./component/Sidebar";
import Content from "./component/Content";
import Bottombar from "./component/Bottombar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <Bottombar />
    </Router>
  );
}

export default App;
