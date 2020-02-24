import React, { useEffect } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview.js";

const ContentOverview = function(props) {
  useEffect(() => {
    // document.title = "Alex's Blog";
    document.title = props.pageTitle;
  }, [props.pageTitle]);
  return (
    <div>
      <ArticlePreview
        title={props.exampleTitle}
        description={props.exampleDescription}
      />
    </div>
  );
};

export default ContentOverview;
