import React, { useEffect, useState } from "react";
import KeyArticlePreview from "../Articles/KeyArticlePreview/KeyArticlePreview.js";
import ArticlePreview from "../Articles/ArticlePreview/ArticlePreview.js";
import ArticleListItem from "../Articles/ArticleListItem/ArticleListItem.js";

import "./ContentOverview.css";

const ContentOverview = function(props) {
  const [masterTitle, setMasterTitle] = useState("");
  useEffect(() => {
    document.title = props.pageTitle;
    setMasterTitle("");
    setTimeout(() => animateMasterTitle(props.masterTitle), 1200);
    return function cleanup() {
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
    };
  }, [props.pageTitle]);
  function animateMasterTitle(title) {
    for (let i = 0; i < title.length; i++) {
      setTimeout(() => setMasterTitle(title.substr(0, i + 1)), i * 100);
    }
  }
  return (
    <div>
      <div style={{ padding: "0% 10%" }}>
        <div className="masterTitleContainer mb-2">
          <h1 className="masterTitle">
            {masterTitle}
            {masterTitle.length !== props.masterTitle.length && (
              <span style={{ fontWeight: 400 }}>|</span>
            )}
          </h1>
        </div>
        <div className="mb-2">
          <KeyArticlePreview
            title={props.keyTitle}
            description={props.keyDescription}
          />
        </div>
        <div className="articlePreviewFlexContainer mb-2">
          <ArticlePreview />
          <ArticlePreview />
        </div>
        <div>
          <ArticleListItem />
        </div>
      </div>
    </div>
  );
};

ContentOverview.defaultProps = {
  pageTitle: "Alex's Blog",
  masterTitle: "Writing about my journey",
  keyTitle: "General Overview",
  keyDescription: "Lorem ipsum…"
};
export default ContentOverview;
