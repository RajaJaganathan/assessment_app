import React, { Component } from 'react';

import PrivateRoute from '../components/PrivateRoute';
import QuestionBankList from '../components/QuestionBankList';
import QuestionBankManageContainer from './QuestionBankManageContainer';

class QuestionBankListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }
  render() {
    return (
      <div>
        <PrivateRoute exact path="/questionbanks" component={QuestionBankList} />
        <PrivateRoute
          path="/questionbanks/manage"
          component={QuestionBankManageContainer}
        />
      </div>
    );
  }
}

QuestionBankListContainer.defaultProps = {
  isLoading: true
};

// const mapDispatchToProps = dispatch => {
//   return {};
// };

// const mapStateToProps = state => {
//   return {
//     questions: []
//   };
// };

// export default withRouter(
//   connect(mapDispatchToProps, mapStateToProps)(QuestionBankListContainer)
// );

export default QuestionBankListContainer;
