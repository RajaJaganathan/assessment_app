import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import DashboardCard from './DashboardCard';

import { fetchAllQuestionBank } from '../questionbank/actions';

class QuestionBankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}, {}, {}, {}, {}],
    };
    this.handleQuestionBankClick = this.handleQuestionBankClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuestionBank();
  }

  handleQuestionBankClick(item) {
    console.log('props', this.props);
    this.props.history.push(`/questionbanks/${item._id}/questions`);
  }

  render() {
    const { isFetching, questionBanks } = this.props;
    return (
      <div className="mB20">
        {isFetching ? <h3> Loading ... </h3> : null}
        {questionBanks.map((item, idx) =>
          <DashboardCard
            key={item._id}
            title={item.text}
            desc={item.desc}
            actionText="Manage"
            onActionClick={() => this.handleQuestionBankClick(item)}
            helpText="Help"
          />,
        )}
      </div>
    );
  }
}

const mapDispatchToProps = { fetchAllQuestionBank };

const mapStateToProps = state => ({
  questionBanks: state.questionBanks.questionBanks,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(QuestionBankList),
);
