import React from "react";

export default function (orgElements, isExtensive = true) {
  let hrCount = isExtensive ? orgElements.length : orgElements.length - 1;
  let newElements = [];
  for (let i = 0; i < orgElements.length; i++) {
    newElements.push(orgElements[i]);
    if (i < hrCount) {
      newElements.push( < hr / > );
    }
  }
  return newElements;
}