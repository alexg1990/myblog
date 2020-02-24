import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import ContentOverview from "../ContentOverview/ContentOverview";
const test =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
const Routes = function() {
  return (
    <div>
      <Switch>
        <Route path="/javascript">
          <ContentOverview
            pageTitle="Learn JS"
            exampleTitle="Learn JS"
            exampleDescription="Lorem ipsum…"
          />
        </Route>
        <Route path="/react">
          <ContentOverview
            pageTitle="Learn React"
            exampleTitle="Learn React"
            exampleDescription="Lorem ipsum…"
          />
        </Route>
        <Route path="/typescript">
          <ContentOverview
            pageTitle="Learn TypeScript"
            exampleTitle="Learn TypeScript"
            exampleDescription="Lorem ipsum…"
          />
        </Route>
        <Route path="/">
          <ContentOverview
            pageTitle="Alex's Blog"
            exampleTitle="General Overview"
            exampleDescription={test}
          />
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
