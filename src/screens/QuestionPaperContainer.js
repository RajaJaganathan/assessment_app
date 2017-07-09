import React, { Component } from "react";
import { connect } from "react-redux";

import QuestionPaper from "../components/QuestionPaper";
import { loadQuestions } from "../actions/questionActions";

class QuestionPaperContainer extends Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
    this.state = {
      isQuestionLoading: false
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
    const msg = `${rightAnswer.length}/${questions.length} is right`;
    alert(msg);
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
