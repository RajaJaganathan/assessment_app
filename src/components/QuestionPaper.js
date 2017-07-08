import React, { Component } from "react";
import PropTypes from "prop-types";

import Pagination from "./Pagination";
import { Panel } from "react-bootstrap";

class QuestionPaper extends Component {
  constructor(props) {
    super(props);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChoosingHandler = this.onChoosingHandler.bind(this);
  }

  onSubmitHandler() {
    this.props.onSubmit();
  }

  onChoosingHandler(options, question) {
    options.forEach(item => {
      item.userChecked = false;
    });
    question.userChecked = true;
  }

  renderQuestionOptions(options, question) {
    return options.map((item, key) =>
      <div key={key} className="question__options">
        <div className="question__option">
          <label className="question__label">
            <input
              type="radio"
              name={question.questionNo}
              id={"questionNo" + question.questionNo}
              value={true}
              onChange={e => this.onChoosingHandler(options, item)}
            />
            <span className="question__title">
              {" "}{item.text}{" "}
            </span>
          </label>
        </div>
      </div>
    );
  }

  renderQuestions(questions) {
    return questions.map((item, index) =>
      <div key={index} className="question">
        <div className="question__text">
          <span className="question__no">
            {item.questionNo}).{" "}
          </span>
          {item.question}
        </div>
        <div className="question__body" />
        {this.renderQuestionOptions(item.options, item)}
      </div>
    );
  }

  render() {
    const questions = this.props.questions;
    const currentQuestions = questions.slice(0);
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="question-paper">
            <div className="question-paper__actions">
              <Pagination
                source={questions}
                currentPage={1}
                pageSize={questions.length}
              />
            </div>
            <div className="question-paper__body">
              <Panel>
                {this.renderQuestions(currentQuestions)}
              </Panel>
            </div>
            <div className="question-paper__actions">
              <Pagination
                source={questions}
                currentPage={1}
                pageSize={questions.length}
              />
            </div>
            <Panel>
              <div className="pull-right">
                <button type="button" className="btn btn-primary mR20">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={this.onSubmitHandler}
                >
                  Submit
                </button>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

QuestionPaper.propTypes = {
  questions: PropTypes.array.isRequired,
  onSubmit: PropTypes.func
};

export default QuestionPaper;
