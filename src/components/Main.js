import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./Home";
import LoginContainer from "../screens/LoginContainer";
import DashboardContainer from "../screens/DashboardContainer";
import AssessmentInfoContainer from "../screens/AssessmentInfoContainer";
import QuestionPaperContainer from "../screens/QuestionPaperContainer";
import PrivateRoute from "./PrivateRoute";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute path="/dashboard" component={DashboardContainer} />
        <PrivateRoute path="/assessment" component={AssessmentInfoContainer} />
        <PrivateRoute path="/questions" component={QuestionPaperContainer} />
      </Switch>
    );
  }
}

export default Main;
