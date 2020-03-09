import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import ContentOverview from "../ContentOverview/ContentOverview";

const Routes = function(props) {
  let headerHeight =
    document.getElementsByTagName("header")[0] &&
    document.getElementsByTagName("header")[0].clientHeight;
  let headerDist = 70;
  return (
    <div
      style={
        props.prevOffset <= 70
          ? { marginTop: headerDist }
          : { marginTop: "" + (headerDist + headerHeight) + "px" }
      }
    >
      <Switch>
        <Route path="/javascript">
          <ContentOverview
            pageTitle="Learn JS"
            keyTitle="Learn JS"
            keyDescription="Lorem ipsum…"
          />
        </Route>
        <Route path="/react">
          <ContentOverview />
        </Route>
        <Route path="/typescript">
          <ContentOverview />
        </Route>
        <Route path="/">
          <ContentOverview />
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
