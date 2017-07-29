import React, { Component } from 'react';
import { connect } from 'react-redux';

import DashboardCard from '../components/DashboardCard';

class AdminDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.onQuestionBankClick = this.onQuestionBankClick.bind(this);
    this.onQuestionPaperClick = this.onQuestionPaperClick.bind(this);
  }

  onQuestionBankClick() {
    this.props.history.push('/questionbanks');
  }

  onQuestionPaperClick() {
    this.props.history.push('/questionpaper');
  }

  render() {
    return (
      <div>
        <h2>Admin dashboard</h2>
        <div className="admin-dashboard">
          <div className="admin-dashboard__content">
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
        </div>
      </div>
    );
  }
}

AdminDashboardContainer.defaultProps = {
  isQuestionLoading: true,
  questions: []
};

const mapDispatchToProps = null;

const mapStateToProps = state => ({
  questions: state.question.questions
});

export default connect(mapStateToProps, mapDispatchToProps)(
  AdminDashboardContainer
);
