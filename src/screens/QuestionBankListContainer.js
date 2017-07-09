import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, ProgressBar } from "react-bootstrap";

class QuestionBankListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h3> Loading ... </h3> : null}
        QuestionBankListContainer
      </div>
    );
  }
}

QuestionBankListContainer.defaultProps = {
  isLoading: true
};

// const mapDispatchToProps = dispatch => {
//   return {
//     loadQuestions: () => dispatch(loadQuestions())
//   };
// };

// const mapStateToProps = state => {
//   return {
//     questions: state.question.questions
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(
//   QuestionBuilderContainer
// );

export default QuestionBankListContainer;
