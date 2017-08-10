import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import Pagination from './Pagination';

class QuestionPaper extends Component {
  constructor(props) {
    super(props);
    this.handleSubmitHandler = this.handleSubmitHandler.bind(this);
    this.handleChoosingHandler = this.handleChoosingHandler.bind(this);
  }

  handleSubmitHandler() {
    this.props.onSubmit();
  }

  handleChoosingHandler(options, question) {
    options.forEach((item) => {
      item.userChecked = false;
    });
    question.isUserAnswered = true;
    this.props.onChoiceClick();
  }

  renderQuestionOptions(question) {
    return question.options.map((item, key) =>
      (<div key={key} className="question__options">
        <div className="question__option">
          <label
            className="question__label"
            htmlFor={`questionNo${question.questionNo}`}
          >
            <input
              type="radio"
              name={question.questionNo}
              id={`questionNo${question.questionNo}`}
              value
              onChange={() => this.handleChoosingHandler(question.options, question)}
            />
            <span className="question__title">
              {item.text}
            </span>
          </label>
        </div>
      </div>)
    );
  }

  renderQuestions(questions) {
    return questions.map((item, index) =>
      (<div key={index} className="question">
        <div className="question__text">
          <span className="question__no">
            {item.questionNo}).
          </span>
          {item.questionText}
        </div>
        <div className="question__body" />
        {this.renderQuestionOptions(item)}
      </div>)
    );
  }

  render() {
    const questions = this.props.questions;
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
                {this.renderQuestions(questions)}
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
                  onClick={this.handleSubmitHandler}
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
  onSubmit: PropTypes.func,
  onChoiceClick: PropTypes.func
};

export default QuestionPaper;
