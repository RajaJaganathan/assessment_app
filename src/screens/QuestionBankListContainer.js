import React, { Component } from 'react';

import PrivateRoute from '../components/PrivateRoute';
import QuestionBankList from '../components/QuestionBankList';
import QuestionBankManageContainer from './QuestionBankManageContainer';

class QuestionBankListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div>
        <h3> Question Banks </h3>
        <PrivateRoute
          exact
          path="/questionbanks"
          component={QuestionBankList}
        />
        <PrivateRoute
          path="/questionbanks/:questionBankId/questions"
          component={QuestionBankManageContainer}
        />
      </div>
    );
  }
}

QuestionBankListContainer.defaultProps = {
  isLoading: true,
};

export default QuestionBankListContainer;
