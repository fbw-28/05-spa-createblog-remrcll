import React from "react";
import { Link } from "react-router-dom";

export default function CurrentPost(props) {
  console.log(props);

  return (
    <div>
      {props.allPosts &&
        props.allPosts.map((post) => {
          return (
            <>
              <header>
                <h1>{post.title}</h1>
              </header>
              <section className="content">
                <p>{post.content}</p>
              </section>
              <section className="readmore">
                <Link to="#"> Read the full Article </Link>
              </section>
              <section className="postedate">
                {post.userName} wrote at: {post.postTime}.
              </section>
            </>
          );
        })}
    </div>
  );
}
