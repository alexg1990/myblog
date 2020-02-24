import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import GeneralContent from "../GeneralContent/GeneralContent";
import JavascriptContent from "../JavascriptContent/JavascriptContent";
import ReactContent from "../ReactContent/ReactContent";
import TypescriptContent from "../TypescriptContent/TypescriptContent";

const Routes = function() {
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
};

const mapStateToProps = state => {
  return {
    prevOffset: state.prevOffset
  };
};

export default connect(mapStateToProps)(Routes);
