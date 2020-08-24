import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CurrentPost from "./components/CurrentPost";
import CreatePost from "./components/CreatePost";

export default class App extends Component {
  state = {
    allPosts: [],
    userName: "",
    title: "",
    content: "",
    postTime: "",
  };

  saveInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let post = {
      userName: this.state.userName,
      title: this.state.title,
      content: this.state.content,
      postTime: new Date().toLocaleDateString(),
    };

    this.setState({
      allPosts: [post, ...this.state.allPosts],
      userName: "",
      title: "",
      content: "",
    });
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/create-post"
              render={(props) => (
                <CreatePost
                  {...props}
                  saveInput={this.saveInput}
                  handleSubmit={this.handleSubmit}
                  userName={this.state.userName}
                  title={this.state.title}
                  content={this.state.content}
                />
              )}
            />
            <Route
              path="/show"
              render={(props) => (
                <CurrentPost {...props} allPosts={this.state.allPosts} />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
