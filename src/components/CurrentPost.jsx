import React from "react";
import { Link } from "react-router-dom";

export default function CurrentPost() {
  return (
    <div>
      <header>
        <h1>Good Morning Developers</h1>
      </header>
        <section className="readmore">
        <Link to="#"> Read the full Article </Link>
        </section>
      <section className="postedat">
          DCI wrote at: 24/7/2019 10:48
      </section>
    </div>
  );
}
