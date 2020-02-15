import React from "react";
import { Switch, Route } from "react-router-dom";

import GeneralContent from "../GeneralContent/GeneralContent";
import JavascriptContent from "../JavascriptContent/JavascriptContent";
import ReactContent from "../ReactContent/ReactContent";
import TypescriptContent from "../TypescriptContent/TypescriptContent";

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/javascript">
          <JavascriptContent />
        </Route>
        <Route path="/react">
          <ReactContent />
        </Route>
        <Route path="/typescript">
          <TypescriptContent />
        </Route>
        <Route path="/">
          <GeneralContent />
        </Route>
      </Switch>
    </div>
  );
}
