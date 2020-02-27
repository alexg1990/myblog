import React, { useEffect, useState } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview.js";

import "./ContentOverview.css";

const ContentOverview = function(props) {
  const [masterTitle, setMasterTitle] = useState("");
  useEffect(() => {
    document.title = props.pageTitle;
    setTimeout(() => animateMasterTitle(props.masterTitle), 1200);
    return function cleanup() {
      setMasterTitle("|");
      let highestTimeoutId = setTimeout(";");
      for (let i = 0; i < highestTimeoutId; i++) {
        clearTimeout(i);
      }
    };
  }, [props.pageTitle]);
  function animateMasterTitle(title) {
    for (let i = 0; i < title.length; i++) {
      setTimeout(
        () =>
          setMasterTitle(
            title.substr(0, i + 1) + (i < title.length - 1 ? "|" : "")
          ),
        i * 100
      );
    }
  }
  return (
    <div>
      <div className="masterTitleContainer">
        <h1 className="masterTitle">
          {masterTitle}
          <span style={{ fontWeight: 400 }}>|</span>
        </h1>
      </div>
      <ArticlePreview
        title={props.exampleTitle}
        description={props.exampleDescription}
      />
    </div>
  );
};

ContentOverview.defaultProps = {
  masterTitle: "Welcome to my Blog!"
};
export default ContentOverview;
