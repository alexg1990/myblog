import React from "react";

import "./ArticlePreview.css";
import MockImage from "../../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import stringShortener from "../../../helpers/stringShortener.js";

const ArticlePreview = function(props) {
  let description = stringShortener(props.description, 300);
  return (
    <div className="articlePreviewContainer">
      <div>
        <h3>{props.title}</h3>
        <p>{description}</p>
      </div>
      <img className="articleImage" src={MockImage}></img>
    </div>
  );
};

ArticlePreview.defaultProps = {
  title: "default titel",
  description:
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
};

export default ArticlePreview;
