import React from "react";

import "./ArticlePreview.css";
import MockImage from "../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

const ArticlePreview = function(props) {
  return (
    <div className="articleContainer">
      <div className="keyArticleImageContainer">
        <img className="keyArticleImage" src={MockImage} alt="keyImage"></img>
      </div>
      <div className="keyArticleInfo">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default ArticlePreview;
