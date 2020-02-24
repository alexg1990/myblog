import React, { useEffect } from "react";
import ArticlePreview from "../ArticlePreview/ArticlePreview.js";

function General() {
  useEffect(() => {
    document.title = "Alex's Blog";
  }, []);
  return (
    <div>
      <ArticlePreview title="Example title" description="lorem ipsum…" />
    </div>
  );
}

export default General;
