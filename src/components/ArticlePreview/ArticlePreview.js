import React from "react";

import "./ArticlePreview.css";

const ArticlePreview = function(props) {
  return (
    <div className="articlePreviewContainer">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src="#"></img>
    </div>
  );
};

ArticlePreview.defaultProps = {
  title: "default titel",
  description: "default description"
};

export default ArticlePreview;
