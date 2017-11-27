import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import DashboardCard from './DashboardCard';
import CreateQuestionBank from '../components/CreateQuestionBank';

import { fetchAllQuestionBank, createQuestionsBank } from '../questionbank/actions';

class QuestionBankList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}, {}, {}, {}, {}],
      showQuestionBankModal: false
    };
    this.handleQuestionBankClick = this.handleQuestionBankClick.bind(this);

    this.handleClickCreateQuestionBank = this.handleClickCreateQuestionBank.bind(this);
    this.handleHideQuestionBank = this.handleHideQuestionBank.bind(this);
    this.handleCreateQuestionBank = this.handleCreateQuestionBank.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllQuestionBank();
  }

  handleCreateQuestionBank(payload) {
    this.props.createQuestionsBank(payload);
    this.setState({
      showQuestionBankModal: false
    });
  }

  handleClickCreateQuestionBank() {
    this.setState({
      showQuestionBankModal: true
    });
  }

  handleHideQuestionBank() {
    this.setState({
      showQuestionBankModal: false
    });
  }

  handleQuestionBankClick(item) {
    console.log('props', this.props);
    this.props.history.push(`/questionbanks/${item._id}/questions`);
  }

  render() {
    const { isFetching, questionBanks } = this.props;
    const { showQuestionBankModal } = this.state;
    return (
      <div className="mB20">
        {isFetching ? <h3> Loading ... </h3> : null}
        <div className="row">
          <div className="col-xs-12 mB20 mR20">
            <Button className="pull-right " onClick={this.handleClickCreateQuestionBank}>Create Question Bank</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            {questionBanks.map((item, idx) =>
              <DashboardCard
                key={item._id}
                title={item.title}
                desc={item.desc}
                actionText="Manage"
                onActionClick={() => this.handleQuestionBankClick(item)}
                helpText="Help"
              />,
            )}
          </div>
        </div>
        <CreateQuestionBank
          show={showQuestionBankModal}
          isEditable={false}
          onCreateQuestionBank={this.handleCreateQuestionBank}
          onHide={this.handleHideQuestionBank}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchAllQuestionBank,
  createQuestionsBank
};

const mapStateToProps = state => ({
  questionBanks: state.questionBanks.questionBanks,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(QuestionBankList));
