import React from "react";

import "./KeyArticlePreview.css";
import MockImage from "../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

const KeyArticlePreview = function(props) {
  return (
    <div className="articleContainer">
      <div className="keyArticleImageContainer">
        <img className="keyArticleImage" src={MockImage} alt="keyImage"></img>
      </div>
      <div className="keyArticleInfo">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default KeyArticlePreview;
