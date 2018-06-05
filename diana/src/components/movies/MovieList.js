import React from "react";

const MovieList = movielist => (
  <ul>
    {movielist.map(({ body, author }) =>
      <li>{body}-{author}</li>
    )}
  </ul>
)