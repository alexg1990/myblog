import React, { useEffect, useState } from "react";
import KeyArticlePreview from "../Articles/KeyArticlePreview/KeyArticlePreview.js";
import ArticlePreview from "../Articles/ArticlePreview/ArticlePreview.js";

import "./ContentOverview.css";

const ContentOverview = function(props) {
  const [masterTitle, setMasterTitle] = useState("");
  useEffect(() => {
    document.title = props.pageTitle;
    setMasterTitle("");
    setTimeout(() => animateMasterTitle(props.masterTitle), 1200);
    return function cleanup() {
      let highestTimeoutId = setTimeout(() => ";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
    };
  }, [props.pageTitle, props.masterTitle]);
  function animateMasterTitle(title) {
    for (let i = 0; i < title.length; i++) {
      setTimeout(() => setMasterTitle(title.substr(0, i + 1)), i * 100);
    }
  }
  return (
    <div>
      <div style={{ padding: "0% 10%" }}>
        <div className="masterTitleContainer">
          <h1 className="masterTitle">
            {masterTitle}
            {masterTitle.length !== props.masterTitle.length && (
              <span style={{ fontWeight: 400 }}>|</span>
            )}
          </h1>
        </div>
        <KeyArticlePreview
          title={props.exampleTitle}
          description={props.exampleDescription}
        />
        <div className="articlePreviewFlexContainer">
          <ArticlePreview />
          <ArticlePreview />
        </div>
      </div>
    </div>
  );
};

ContentOverview.defaultProps = {
  masterTitle: "Writing about my journey"
};
export default ContentOverview;
