import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CurrentPost from "./components/CurrentPost";
import CreatePost from "./components/CreatePost";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/create-post" component={CreatePost} />
            <Route path="/show" component={CurrentPost} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
