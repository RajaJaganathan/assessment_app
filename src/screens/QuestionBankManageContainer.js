import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Button } from "react-bootstrap";

import {loadQuestions} from "../actions/questionActions";
import CreateQuestionModal from "../components/CreateQuestionModal";

class QuestionBankManageContainer extends Component {
  static defaultProps = {
    isLoading: true,
    questions:[]
  };

  static propTypes = {
    questions: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    this.onShowCreateQuestionModal = this.onShowCreateQuestionModal.bind(this);
    this.onHideQuestionModal = this.onHideQuestionModal.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);

    this.state = {
      isLoading: false,
      showCreateQuestionModal: false,
      questions: this.props.questions // FIXME
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    this.props.loadQuestions();
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
    // form.reset();
    console.log('form', form)
  }

  renderRow(){
    return this.props.questions.map((item)=>{
      return (<tr key={item.questionNo}>
          <td>{item.question}</td>
          <td>
            {
              item.tags.map((tag)=>{
                return <Button key={tag}>{tag}</Button>;
              })
            }
          </td>
          <td>
            <Button>Edit</Button>
          </td>
        </tr>
      );
    });
  }

  render() {
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
            {this.props.questions && <table className="table table-hover text-left">
              <thead>
                <tr>
                  <th>Questions</th>
                  <th>Tags</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.renderRow()}
              </tbody>
            </table>}
          </div>
        </div>
        <CreateQuestionModal
          show={this.state.showCreateQuestionModal}
          onHide={this.onHideQuestionModal}
          onCreateQuestion={this.onCreateQuestion}
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
