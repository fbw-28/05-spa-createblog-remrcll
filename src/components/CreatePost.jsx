import React, { Component } from "react";
import { Link } from "react-router-dom";
// import CurrentPost from "./CurrentPost";

export default class CreatePost extends Component {
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

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   this.setState({postTime: new Date().toLocaleString()})
  // };

  render() {
    console.log(this.props);

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
                name="userName"
                value={this.props.userName}
                onChange={this.props.saveInput}
              />
            </label>
            <label>
              Title:
              <input
                type="text"
                placeholder="Title..."
                name="title"
                value={this.props.title}
                onChange={this.props.saveInput}
              />
            </label>
            <label>
              Content:
              <input
                type="text"
                placeholder="Content..."
                name="content"
                value={this.props.content}
                onChange={this.props.saveInput}
              />
            </label>
          </div>
          <button type="submit" onClick={this.props.handleSubmit}>
            Create a Post
          </button>
        </form>
      </div>
    );
  }
}
