import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, ProgressBar } from 'react-bootstrap';

import QuestionPaper from '../components/QuestionPaper';
import { fetchQuestions } from '../actions/questionActions';

class QuestionPaperContainer extends Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onChoiceClick = this.onChoiceClick.bind(this);
    this.state = {
      isQuestionLoading: false,
      resultText: '',
      noOfAnswered: 0
    };
  }

  componentDidMount() {
    this.props.fetchQuestions();
    this.setState({ isQuestionLoading: true });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questions) {
      this.setState({ isQuestionLoading: false });
    }
  }

  onChoiceClick() {
    const noOfAnswered = this.props.questions.reduce((acc, currentItem) => {
      return acc + (currentItem.isUserAnswered ? 1 : 0);
    }, 0);
    const totalQuestions = this.props.questions.length;
    const ratioAnswered = (noOfAnswered / totalQuestions) * 100;
    this.setState({
      noOfAnswered: ratioAnswered
    });
  }

  onCloseModal() {
    this.setState({
      showModal: false
    });
    this.props.history.push('/dashboard');
  }

  showResult() {
    const { questions = [] } = this.props;
    questions.forEach(q => {
      q.isRightAnswer = q.options.some(opt => {
        return opt.userChecked && opt.answer;
      });
    });

    const rightAnswer = questions.filter(q => q.isRightAnswer);
    const resultText = `You got ${rightAnswer.length}/${questions.length} correct answer !!!`;

    this.setState({
      showModal: true,
      resultText
    });
  }

  render() {
    return (
      <div>
        {this.state.isQuestionLoading ? <h3> Loading ... </h3> : null}
        <ProgressBar active now={this.state.noOfAnswered} />
        <QuestionPaper
          questions={this.props.questions}
          onSubmit={this.showResult}
          onChoiceClick={this.onChoiceClick}
        />
        <Modal show={this.state.showModal} onHide={this.onCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Results</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>
              {this.state.resultText}
            </h4>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.onCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

QuestionPaperContainer.defaultProps = {
  isQuestionLoading: true,
  questions: []
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQuestions: () => dispatch(fetchQuestions())
  };
};

const mapStateToProps = state => {
  return {
    questions: state.question.questions
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  QuestionPaperContainer
);
