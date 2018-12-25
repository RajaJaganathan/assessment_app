import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { fetchQuestions, addQuestions } from '../reducers/question.reducer';
import {
  fetchQuestionsById,
  createQuestionsById,
  deleteQuestionsFromQB
} from '../questionbank/actions';

import CreateQuestionModal from '../components/CreateQuestionModal';
import QuestionList from '../components/QuestionsList';

class QuestionBankManageContainer extends Component {
  constructor(props) {
    super(props);

    this.onShowCreateQuestionModal = this.onShowCreateQuestionModal.bind(this);
    this.onHideQuestionModal = this.onHideQuestionModal.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);
    this.onEditQuestion = this.onEditQuestion.bind(this);
    this.onDeleteQuestion = this.onDeleteQuestion.bind(this);
    // this.onUpdateQuestion = this.onUpdateQuestion.bind(this);
    this.state = {
      isLoading: false,
      showCreateQuestionModal: false,
      questions: this.props.defaultQuestions,
      selectedQuestion: {},
    };
    this.defaultOptions = [{ text: '', answer: false }];
  }

  componentDidMount() {
    const { questionBankId } = this.props.match.params;
    this.props.fetchQuestionsById(questionBankId);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ questions: nextProps.questions });
  }

  onShowCreateQuestionModal() {
    this.setState({
      isEditMode: false,
      showCreateQuestionModal: true,
      options: null,
      tags: null,
    });
  }

  onHideQuestionModal() {
    this.setState({
      showCreateQuestionModal: false,
      selectedQuestion: {},
    });
  }

  onCreateQuestion(newQuestion) {
    let questions;

    if (newQuestion.isEditMode) {
      questions = this.state.questions.map(item => {
        if (this.state.selectedQuestion === item) {
          return {
            ...item,
            ...newQuestion,
          };
        }
        return item;
      });
    } else {
      const { questionBankId } = this.props.match.params;
      newQuestion.questionBankId = questionBankId;
      this.props.createQuestionsById(newQuestion);
    }
    this.setState({ showCreateQuestionModal: false });
  }

  onEditQuestion(newQuestion) {
    this.setState({
      isEditMode: true,
      selectedQuestion: newQuestion,
      showCreateQuestionModal: true,
    });
  }
  onDeleteQuestion(question) {
    const { questionBankId } = this.props.match.params;
    this.props.deleteQuestionsFromQB({question, questionBankId});
    this.setState({
      showCreateQuestionModal: false,
    });
  }

  render() {
    const { questions, showCreateQuestionModal } = this.state;
    const { questionNo, text, options, tags } = this.state.selectedQuestion;
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
            <QuestionList
              isEditMode="true"
              questions={questions}
              onEdit={this.onEditQuestion}
              onDelete={this.onDeleteQuestion}
            />
          </div>
        </div>
        <CreateQuestionModal
            questionNo={questionNo}
            text={text}
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

QuestionBankManageContainer.defaultProps = {
  isLoading: true,
  questions: [{ options: [{ text: '', answer: false }] }],
  defaultQuestions: [],
};

QuestionBankManageContainer.propTypes = {
  questions: PropTypes.array,
};

const mapDispatchToProps = {
  fetchQuestions,
  addQuestions,
  fetchQuestionsById,
  createQuestionsById,
  deleteQuestionsFromQB,
};

const mapStateToProps = state => ({
  questions: state.questionBanks.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionBankManageContainer,
);
