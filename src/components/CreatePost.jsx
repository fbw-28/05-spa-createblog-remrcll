import React from "react";

export default function CreatePost() {
  return (
    <div>
      <header>
        <h1>Create a post!</h1>
      </header>

      <form type="submit">
        <div className="form">
          <label>
            Username:
            <input type="text" />
          </label>
          <label>
            Title:
            <input type="text" />
          </label>
          <label>
            Content:
            <input type="text" />
          </label>
        </div>
        <button type="submit" name="create a post">
          Create a Post
        </button>
      </form>
    </div>
  );
}
