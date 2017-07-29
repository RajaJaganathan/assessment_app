import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginContainer from '../screens/LoginContainer';
import DashboardContainer from '../screens/DashboardContainer';
import AssessmentInfoContainer from '../screens/AssessmentInfoContainer';
import QuestionPaperContainer from '../screens/QuestionPaperContainer';
import AdminDashboardContainer from '../screens/AdminDashboardContainer';
import QuestionBankListContainer from '../screens/QuestionBankListContainer';
import QuestionPaperListContainer from '../screens/QuestionPaperListContainer';
import QuestionBankManageContainer from '../screens/QuestionBankManageContainer';
// import QuestionPaperManageContainer from '../screens/QuestionBankManageContainer';

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
          exact
          path="/questionbanks"
          component={QuestionBankListContainer}
        />
        <PrivateRoute
          exact
          path="/questionpaper"
          component={QuestionPaperListContainer}
        />
        <PrivateRoute
          exact
          path="/questionbanks/manage"
          component={QuestionBankManageContainer}
        />
        {/* <PrivateRoute
          exact
          path="/questionpaper/manage"
          component={QuestionPaperManageContainer}
        /> */}

        <PrivateRoute exact path="/dashboard" component={DashboardContainer} />
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
