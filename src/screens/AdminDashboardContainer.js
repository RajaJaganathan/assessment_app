import React, { Component } from "react";
import { connect } from "react-redux";

import DashboardCard from '../components/DashboardCard';


class AdminDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.onQuestionBankClick = this.onQuestionBankClick.bind(this);
    this.onQuestionPaperClick = this.onQuestionPaperClick.bind(this);
  }

  onQuestionBankClick(){
    this.props.history.push('/questionbanks');
  }

  onQuestionPaperClick(){
    this.props.history.push('/questionpaper');
  }

  render() {
    return (
      <div>
        <h2>Admin dashboard</h2>
        <DashboardCard
          title="Question Bank"
          desc="Contains all questions"
          actionText="Go to "
          onActionClick={this.onQuestionBankClick}
          helpText="Help"
         />
        <DashboardCard
          title="Question Paper"
          desc="Contains all questions paper here"
          actionText="Go to"
          onActionClick={this.onQuestionPaperClick}
          helpText="Help"
          />
      </div>
    );
  }
}

AdminDashboardContainer.defaultProps = {
  isQuestionLoading: true,
  questions: []
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const mapStateToProps = state => {
  return {
    questions: state.question.questions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  AdminDashboardContainer
);
