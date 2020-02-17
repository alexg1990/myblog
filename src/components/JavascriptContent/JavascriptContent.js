import React, { useEffect } from "react";

function Javascript() {
  useEffect(() => {
    document.title = "Learn React";
  }, []);
  return <div>Javascript</div>;
}

export default Javascript;
