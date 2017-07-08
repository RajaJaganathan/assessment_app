import React, { Component } from "react";

import QuestionPaper from "../components/QuestionPaper";

class QuestionPaperContainer extends Component {
  constructor(props) {
    super(props);
    this.showResult = this.showResult.bind(this);
    this.state = {
      isLoading: false,
      questions: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("api/v1/questions", {
      credentials: "include"
    })
      .then(res => res.json())
      .then(questions => {
        this.setState({
          questions,
          isLoading: false
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  showResult() {
    const {questions=[]} = this.state;
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
        {this.state.isLoading ? <h3> Loading ... </h3> : null}
        <QuestionPaper
          questions={this.state.questions}
          onSubmit={this.showResult}
        />
      </div>
    );
  }
}

export default QuestionPaperContainer;
