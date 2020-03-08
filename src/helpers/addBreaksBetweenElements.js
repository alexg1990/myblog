import React from "react";

export default function(orgElements) {
  let newElements = [];
  for (let i = 0; i < orgElements.length; i++) {
    newElements.push(orgElements[i]);
    if (i < orgElements.length - 1) {
      newElements.push(<hr />);
    }
  }
  return newElements;
}
