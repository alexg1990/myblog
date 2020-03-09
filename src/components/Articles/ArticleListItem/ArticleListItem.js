import React from "react";

import "./ArticleListItem.css";
import stringShortener from "../../../helpers/stringShortener.js";

import MockImage from "../../../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";

const ArticleListItem = props => {
  let { title, description } = props;
  if (window.innerWidth > 768) {
    description = stringShortener(description, 300);
  } else {
    description = stringShortener(description, 100);
  }
  return (
    <div className="articleListItemPreviewContainer">
      <div className="articleListItemImageContainer">
        <img className="articleListItemImage" src={MockImage} />
      </div>
      <div className="articleListItemInfo">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ArticleListItem.defaultProps = {
  title: "title",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

export default ArticleListItem;
