import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    //BEM naming conevetion
    <div className="app">
      <h1>Hello world! Let's build Slack using React</h1>

      <Header />
      <div className="app__body">
        <Sidebar />

        <Switch>

        </Switch>
      </div>
      {/* Sidebar */}
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
