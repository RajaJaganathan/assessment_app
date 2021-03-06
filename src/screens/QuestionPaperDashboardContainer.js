import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

import DashboardCard from '../components/DashboardCard';
import CreateQuestionPaper from '../questionpaper/CreateQuestionPaper';
import * as actions from '../questionpaper/actions';

class QuestionPaperDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClickCreateQuestionPaper = this.handleClickCreateQuestionPaper.bind(
      this,
    );
    this.handleCreateQuestionPaper = this.handleCreateQuestionPaper.bind(this);
    this.handleHideQuestionPaper = this.handleHideQuestionPaper.bind(this);
    this.handleActionClick = this.handleActionClick.bind(this);
    this.state = {
      isLoading: true,
      showQuestionPaperModal: false,
    };
  }

  componentDidMount() {
    this.props.fetchAllQuestionPapers();
  }

  handleClickCreateQuestionPaper() {
    this.setState({
      showQuestionPaperModal: true,
    });
  }

  handleHideQuestionPaper() {
    this.setState({
      showQuestionPaperModal: false,
    });
  }

  handleActionClick(item) {
    this.props.history.push(`/questionpaper/${item._id}/questions`);
  }

  handleCreateQuestionPaper(data) {
    this.props.createQuestionPaper(data);
    this.handleHideQuestionPaper();
  }

  renderQuestionPaper(questionPapers) {
    return (
      questionPapers &&
      questionPapers.map(q => {
        const { _id, title, desc } = q;
        return (
          <DashboardCard
            key={_id}
            title={title}
            desc={desc}
            actionText="Manage"
            helpText="Publish"
            onActionClick={() => this.handleActionClick(q)}
          />
        );
      })
    );
  }

  render() {
    const { showQuestionPaperModal } = this.state;
    const { questionPapers } = this.props;
    return (
      <div>
        <div className="m20">
          <Button
            onClick={this.handleClickCreateQuestionPaper}
            className="pull-right mB10"
          >
            Create Question Paper
          </Button>
          {this.props.isFetching ? <h3> Loading ... </h3> : null}
        </div>
        <div className="dashboard">
          {this.renderQuestionPaper(questionPapers)}
        </div>
        <CreateQuestionPaper
          show={showQuestionPaperModal}
          isEditable={false}
          onCreateQuestionPaper={this.handleCreateQuestionPaper}
          onHide={this.handleHideQuestionPaper}
        />
      </div>
    );
  }
}

QuestionPaperDashboardContainer.defaultProps = {
  isLoading: false,
};

const mapDispatchToProps = dispatch => ({
  fetchAllQuestionPapers: bindActionCreators(
    actions.fetchAllQuestionPapers,
    dispatch,
  ),
  createQuestionPaper: bindActionCreators(
    actions.createQuestionPaper,
    dispatch,
  ),
});

const mapStateToProps = ({ questionPapers }) => ({
  isFetching: questionPapers.isFetching,
  questionPapers: questionPapers.questionPapers,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionPaperDashboardContainer,
);
