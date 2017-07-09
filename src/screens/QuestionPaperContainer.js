import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import QuestionPaper from "../components/QuestionPaper";
import { loadQuestions } from "../actions/questionActions";

class QuestionPaperContainer extends Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.state = {
      isQuestionLoading: false,
      resultText: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.questions) {
      this.setState({ isQuestionLoading: false });
    }
  }

  componentDidMount() {
    this.setState({ isQuestionLoading: true });
    this.props.loadQuestions();
  }

  showResult() {
    const { questions = [] } = this.props;
    questions.forEach(q => {
      q.isRightAnswer = q.options.some(opt => {
        return opt.userChecked === true && opt.answer === true;
      });
    });

    const rightAnswer = questions.filter(q => q.isRightAnswer);
    const resultText = `${rightAnswer.length}/${questions.length} is right`;
    this.setState({
      showModal: true,
      resultText
    });
  }

  onCloseModal() {
    this.setState({
      showModal: false
    });
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        {this.state.isQuestionLoading ? <h3> Loading ... </h3> : null}
        <QuestionPaper
          questions={this.props.questions}
          onSubmit={this.showResult}
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
    loadQuestions: () => dispatch(loadQuestions())
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
