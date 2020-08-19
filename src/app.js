import { hot } from "react-hot-loader/root";
import React from "react";
import Navbar from "./components/Home/navbar";
import Board from "./components/board";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from "./components/home";

function App(props) {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Board}></Route>
          {/* <Route path="/" component={Home}></Route> */}
        </Switch>
      </Router>
    </>
  );
}

export default hot(App);
