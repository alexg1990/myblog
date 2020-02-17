import React, { useEffect } from "react";

function ReactContent() {
  useEffect(() => {
    document.title = "Learn React";
  }, []);
  return <div>React</div>;
}

export default ReactContent;
