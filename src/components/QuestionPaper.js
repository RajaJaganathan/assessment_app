import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Panel } from 'react-bootstrap';

import Pagination from './Pagination';

function QuestionOption(props) {
    return <div>
        {props.question.options.map((item, key) =>
            (<div key={key} className="question__options">
                <div className="question__option">
                    <input
                        type="radio"
                        name={props.question.text}
                        id={`questionNo${item.text}`}
                        value
                        onChange={() => props.onChoiceClick(props.question.options, props.question)}
                    />
                    <label
                        className="question__label"
                        htmlFor={`questionNo${item.text}`}
                    >
                         {item.text}
                    </label>
                </div>
            </div>)
        )}
    </div>
}

QuestionOption.propTypes = {
    question: PropTypes.object.isRequired,
    onChoiceClick: PropTypes.func.isRequired
};

function Questions(props) {
    return (<div>{props.questions.map((question, index) =>
        (<div key={index} className="question">
            <div className="question__text">
                <span className="question__no">
                    {index + 1})
                </span>
                {question.text}
            </div>
            <div className="question__body" />
            <QuestionOption question={question} onChoiceClick={props.onChoiceClick} />
        </div>)
    )}</div>)
}

Questions.propTypes = {
    questions: PropTypes.array.isRequired,
    onChoiceClick: PropTypes.func.isRequired
}

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
                                <Questions questions={questions} onChoiceClick={this.handleChoosingHandler} />
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
