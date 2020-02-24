import React from "react";

import "./ArticlePreview";

const ArticlePreview = function(props) {
  return (
    <article className="container">
      <img src="#"></img>
      <div className="container;flexRow">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export default ArticlePreview;
