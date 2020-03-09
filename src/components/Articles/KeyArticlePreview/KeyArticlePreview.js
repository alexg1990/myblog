import React from "react";

import "./KeyArticlePreview.css";
import MockImage from "../../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import stringShortener from "../../../helpers/stringShortener.js";

const KeyArticlePreview = function(props) {
  let description = stringShortener(props.description, 300);
  return (
    <div className="articleContainer">
      <div className="keyArticleImageContainer">
        <img className="keyArticleImage" src={MockImage} alt="keyImage"></img>
      </div>
      <div className="keyArticleInfo">
        <h2>{props.title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default KeyArticlePreview;
