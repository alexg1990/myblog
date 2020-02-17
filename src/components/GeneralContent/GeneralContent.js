import React, { useEffect } from "react";

function General() {
  useEffect(() => {
    document.title = "Alex's Blog";
  }, []);
  return <div>General</div>;
}

export default General;
