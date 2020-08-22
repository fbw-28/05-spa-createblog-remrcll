import React from "react";
import { Link } from "react-router-dom";

export default function CurrentPost(props) {
  console.log(props);
  let title = props.location.ForwardedTitle;
  let user = props.location.ForwardedUser;
  let content = props.location.ForwardedContent;
  let time = props.location.ForwardedTime;
  
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <section className="content">
        <p>{content}</p>
      </section>
      <section className="readmore">
        <Link to="#"> Read the full Article </Link>
      </section>
      <section className="postedate">
        {user} wrote at: {time}.
      </section>
    </div>
  );
}
