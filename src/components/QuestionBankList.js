import React, { Component } from 'react';

import DashboardCard from './DashboardCard';

class QuestionBankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}, {}, {}, {}, {}]
    };
    this.handleQuestionBankClick = this.handleQuestionBankClick.bind(this);
  }

  handleQuestionBankClick() {
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
          onActionClick={this.handleQuestionBankClick}
          helpText="Help"
        />
        <DashboardCard
          title="General Question Bank"
          desc="Contains all general questions paper here"
          actionText="Manage"
          onActionClick={this.handleQuestionBankClick}
          helpText="Help"
        />
      </div>
    );
  }
}

export default QuestionBankList;
