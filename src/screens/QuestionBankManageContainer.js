import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, ProgressBar } from "react-bootstrap";

import DashboardCard from "../components/DashboardCard";
import CreateQuestionModal from "../components/CreateQuestionModal";

class QuestionBankManageContainer extends Component {
  constructor(props) {
    super(props);
    this.onShowCreateQuestionModal = this.onShowCreateQuestionModal.bind(this);
    this.onHideQuestionModal = this.onHideQuestionModal.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);
    this.state = {
      isLoading: false,
      showCreateQuestionModal: false
    };
  }

  onShowCreateQuestionModal() {
    this.setState({
      showCreateQuestionModal: true
    });
  }

  onHideQuestionModal() {
    this.setState({
      showCreateQuestionModal: false
    });
  }

  onCreateQuestion(form) {
    form.reset();
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div>
        <div className="row p20">
          <Button className="pull-right" onClick={this.onShowCreateQuestionModal}>
            Create Question
          </Button>
        </div>
        <div className="row">
          <div className="container">
            <h2>Math Questions</h2>
            <p>All about mathematical questions </p>
            <table className="table table-hover text-left">
              <thead>
                <tr>
                  <th>Questions</th>
                  <th>Tags</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>What does HTML stand for?</td>
                  <td>
                    <Button>Math</Button> <Button>General</Button>
                  </td>
                  <td>
                    <Button>Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>What does HTML stand for?</td>
                  <td>math</td>
                  <td>
                    <Button>Edit</Button>
                  </td>
                </tr>
                <tr>
                  <td>What does HTML stand for?</td>
                  <td>general</td>
                  <td>
                    <Button>Edit</Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <CreateQuestionModal show={this.state.showCreateQuestionModal} onHide={this.onHideQuestionModal} />
          show={this.state.showCreateQuestionModal}
          onHide={this.onHideQuestionModal}
          onCreateQuestion={this.onCreateQuestion}
        />
      </div>
    );
  }
}

QuestionBankManageContainer.defaultProps = {
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

export default QuestionBankManageContainer;
