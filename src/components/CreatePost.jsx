import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CurrentPost from "./CurrentPost";

export default class CreatePost extends Component {
  state = {
    newContent: [
      {
        userName: "",
        title: "",
        content: "",
        postTime: "",
      },
    ],
  };

  // onAddItem = () => {
  //   this.setState(state => {
  //     console.log('The link was clicked.')
  //     const list = this.state.newContent.concat([state.userName, state.title, state.content, state.postTime]);
  //     console.log('The link was clicked.')

  //     return {
  //       list,
  //       userName: "",
  //       title: "",
  //       content: "",
  //       postTime: "",
  //     };

  //   });
  // };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    let postTime = new Date().toLocaleString();
    this.setState({ postTime });
  };

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({postTime: new Date().toLocaleString()})
  // };

  render() {
    console.log(this.state);

    return (
      <div>
        <header>
          <h1>Create a post!</h1>
        </header>

        <form type="submit">
          <div className="form">
            <label>
              Username:
              <input
                type="text"
                placeholder="Username..."
                name="username"
                onChange={(e) => this.setState({ userName: e.target.value })}
              />
            </label>
            <label>
              Title:
              <input
                type="text"
                placeholder="Title..."
                name="title"
                onChange={(e) => this.setState({ title: e.target.value })}
              />
            </label>
            <label>
              Content:
              <input
                type="text"
                placeholder="Content..."
                name="content"
                onChange={(e) => this.setState({ content: e.target.value })}
              />
            </label>
          </div>
          <button key={this.state.title} type="submit" onClick={this.onAddItem}>
            <Link
              to={{
                pathname: `/show/${this.state.title}`,
                ForwardedUser: this.state.userName,
                ForwardedTitle: this.state.title,
                ForwardedContent: this.state.content,
                ForwardedTime: this.state.postTime,
              }}
            >
              Create a Post
            </Link>
          </button>
        </form>
      </div>
    );
  }
}
