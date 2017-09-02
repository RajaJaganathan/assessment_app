import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';

import LoginContainer from '../login/LoginContainer';

import QuestionPaperManageContainer from '../questionpaper/QuestionPaperManageContainer';
import AssessmentDashboardContainer from '../screens/AssessmentDashboardContainer';
import AssessmentInfoContainer from '../screens/AssessmentInfoContainer';
import QuestionPaperContainer from '../screens/QuestionPaperContainer';
import AdminDashboardContainer from '../screens/AdminDashboardContainer';
import QuestionBankListContainer from '../screens/QuestionBankListContainer';
import QuestionPaperDashboardContainer from '../screens/QuestionPaperDashboardContainer';
import QuestionBankManageContainer from '../screens/QuestionBankManageContainer';

import PrivateRoute from './PrivateRoute';
/* eslint-disable react/prefer-stateless-function */
class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={LoginContainer} />
        <PrivateRoute path="/admin" component={AdminDashboardContainer} />

        <PrivateRoute
          path="/questionbanks"
          component={QuestionBankListContainer}
        />

        <PrivateRoute
          exact
          path="/questionpaper"
          component={QuestionPaperDashboardContainer}
        />
        <PrivateRoute
          exact
          path="/questionpaper/manage"
          component={QuestionPaperManageContainer}
        />
        <PrivateRoute
          exact
          path="/questionbank/manage"
          component={QuestionBankManageContainer}
        />

        <PrivateRoute
          exact
          path="/assessments"
          component={AssessmentDashboardContainer}
        />
        <PrivateRoute
          exact
          path="/assessment"
          component={AssessmentInfoContainer}
        />
        <PrivateRoute
          exact
          path="/questions"
          component={QuestionPaperContainer}
        />
      </Switch>
    );
  }
}

export default Main;
