import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import QuestionList from '../components/QuestionsList';

import AddQuestionModal from './AddQuestionModal';

import { fetchAllQuestionBanks, fetchQuestionByQP, addQuestions } from './actions';

class QuestionPaperManageContainer extends Component {
  constructor(props) {
    super(props);
    this.onEditQuestion = this.onEditQuestion.bind(this);
    this.handleAddQuestionClick = this.handleAddQuestionClick.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleHideAddQuestion = this.handleHideAddQuestion.bind(this);
    this.state = {
      showAddQuestionModal: false,
    };
  }

  componentDidMount() {
    const questionPaperId = this.props.match.params.questionPaperId;
    this.props.fetchQuestionByQP({ questionPaperId });
  }

  onEditQuestion() {
    console.log('onEditQuestion');
  }

  handleAddQuestionClick() {
    this.setState({
      showAddQuestionModal: true,
    });
  }

  handleHideAddQuestion() {
    this.setState({
      showAddQuestionModal: false,
    });
  }

  handleAddQuestion(questions) {
    this.props.addQuestions(questions);
    this.handleHideAddQuestion();
  }

  render() {
    const { showAddQuestionModal } = this.state;
    return (
      <div className="row">
        <div className="container">
          <h2>Manage Question Paper</h2>
          <p>All about manage questions paper</p>
          <Button className="btn-success" onClick={this.handleAddQuestionClick}>
            Add Questions From Question Bank
          </Button>
          <QuestionList
            questions={this.props.questions}
            onEdit={this.onEditQuestion}
            isEditMode
          />
          {showAddQuestionModal
            ? <AddQuestionModal
              show={showAddQuestionModal}
              onHide={this.handleHideAddQuestion}
              onAddQuestion={this.handleAddQuestion}
            />
            : null}
        </div>
      </div>
    );
  }
}

QuestionPaperManageContainer.propTypes = {};

const mapDispatchToProps = {
  fetchAllQuestionBanks,
  fetchQuestionByQP,
  addQuestions,
};

const mapStateToProps = state => ({
  questions: [] // state.questionPaper.questions
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPaperManageContainer);
