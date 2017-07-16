import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { loadQuestions } from "../actions/questionActions";
import CreateQuestionModal from "../components/CreateQuestionModal";
import QuestionList from "../components/QuestionsList";

class QuestionBankManageContainer extends Component {
  static defaultProps = {
    isLoading: true,
    defaultQuestions: []
  };

  static propTypes = {
    questions: PropTypes.array
  };

  constructor(props) {
    super(props);

    this.onShowCreateQuestionModal = this.onShowCreateQuestionModal.bind(this);
    this.onHideQuestionModal = this.onHideQuestionModal.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);
    this.onEditQuestion = this.onEditQuestion.bind(this);

    this.state = {
      isLoading: false,
      showCreateQuestionModal: false,
      questions: this.props.defaultQuestions,
      selectedQuestion: {}
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    this.props.loadQuestions();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ questions: nextProps.questions });
  }

  onShowCreateQuestionModal() {
    this.setState({
      isEditMode: false,
      showCreateQuestionModal: true
    });
  }

  onHideQuestionModal() {
    this.setState({
      showCreateQuestionModal: false,
      selectedQuestion: {}
    });
  }

  onCreateQuestion(newQuestion) {
    let questions;

    if (newQuestion.isEditMode) {
      questions = this.state.questions.map(item => {
        if (this.state.selectedQuestion === item) {
          return {
            ...item,
            ...newQuestion
          };
        }
        return item;
      });
    } else {
      questions = [...this.state.questions, newQuestion];
    }
    this.setState({ questions, showCreateQuestionModal: false });
  }

  onUpdateQuestion(newQuestion) {
    // const questions = [...this.state.questions, newQuestion];
    // this.setState({questions});
  }

  onEditQuestion(newQuestion) {
    this.setState({
      isEditMode: true,
      selectedQuestion: newQuestion,
      showCreateQuestionModal: true
    });
  }

  render() {
    const { questions } = this.state;
    const {
      questionNo,
      questionText,
      options,
      tags
    } = this.state.selectedQuestion;
    return (
      <div>
        <div className="row p20">
          <Link to="/questionbanks" className="pull-left">
            Go Question Banks
          </Link>
          <Button
            className="pull-right"
            onClick={this.onShowCreateQuestionModal}
          >
            Create Question
          </Button>
        </div>
        <div className="row">
          <div className="container">
            <h2>Math Questions</h2>
            <p>All about mathematical questions </p>
            <QuestionList questions={questions} onEdit={this.onEditQuestion} />
          </div>
        </div>
        <CreateQuestionModal
          questionNo={questionNo}
          questionText={questionText}
          options={options}
          tags={tags}
          show={this.state.showCreateQuestionModal}
          isEditMode={this.state.isEditMode}
          onHide={this.onHideQuestionModal}
          onCreate={this.onCreateQuestion}
          onUpdate={this.onUpdateQuestion}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadQuestions: () => dispatch(loadQuestions())
  };
};

const mapStateToProps = state => {
  return {
    questions: state.question.questions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionBankManageContainer
);
