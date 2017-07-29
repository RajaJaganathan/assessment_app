import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
// import { Modal, Button, ProgressBar } from 'react-bootstrap';

// import PrivateRoute from '../components/PrivateRoute';
import DashboardCard from '../components/DashboardCard';
// import QuestionBankManageContainer from './QuestionBankManageContainer';

class QuestionBankListContainer extends Component {
  constructor(props) {
    super(props);
    this.onQuestionBankClick = this.onQuestionBankClick.bind(this);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  onQuestionBankClick() {
    this.props.history.push('/questionbanks/manage');
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h3> Loading ... </h3> : null}
        <DashboardCard
          title="Math Question Bank"
          desc="Contains all math and puzzle questions"
          actionText="Manage"
          onActionClick={this.onQuestionBankClick}
          helpText="Help"
        />
        <DashboardCard
          title="General Question Bank"
          desc="Contains all general questions paper here"
          actionText="Manage"
          onActionClick={this.onQuestionBankClick}
          helpText="Help"
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
