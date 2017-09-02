import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';
import QuestionList from '../components/QuestionsList';
import AddQuestionModal from './AddQuestionModal';

import { fetchQuestions, addQuestions } from '../reducers/question.reducer';

class QuestionPaperManageContainer extends Component {
  constructor(props) {
    super(props);
    this.onEditQuestion = this.onEditQuestion.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleHideAddQuestion = this.handleHideAddQuestion.bind(this);
    this.state = {
      showAddQuestionModal: false,
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
  }

  onEditQuestion() {
    console.log('onEditQuestion');
  }

  handleAddQuestion() {
    this.setState({
      showAddQuestionModal: true,
    });
  }

  handleHideAddQuestion() {
    this.setState({
      showAddQuestionModal: false,
    });
  }

  render() {
    const { showAddQuestionModal } = this.state;
    return (
      <div className="row">
        <div className="container">
          <h2>Manage Question Paper</h2>
          <p>All about manage questions paper</p>
          <Button onClick={this.handleAddQuestion}>
            Add Questions From Question Bank
          </Button>
          <QuestionList
            questions={this.props.questions}
            onEdit={this.onEditQuestion}
          />
          {showAddQuestionModal
            ? <AddQuestionModal
              show={showAddQuestionModal}
              onHide={this.handleHideAddQuestion}
            />
            : null}
        </div>
      </div>
    );
  }
}

QuestionPaperManageContainer.propTypes = {};

const mapDispatchToProps = {
  fetchQuestions,
  addQuestions,
};

const mapStateToProps = state => ({
  questions: state.question.questions,
});

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionPaperManageContainer,
);
