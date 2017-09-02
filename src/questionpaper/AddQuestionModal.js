import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {find} from 'lodash/find'

import {
  Button,
  Modal,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

import QuestionList from '../components/QuestionsList';

import { fetchQuestionsByQuestionBank, addQuestionTagChange } from './actions';

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);

    this.state = {
      questionBankId: 100,
    };
  }

  componentDidMount() {
    this.props.fetchQuestionsByQuestionBank(this.state.questionBankId);
  }

  handleAddQuestion() {
    this.props.onAddQuestion(this.state);
  }

  handleChange(e) {
    this.props.fetchQuestionsByQuestionBank(e.target.value);
  }

  handleTagsChange(e) {
    this.props.addQuestionTagChange(e.target.value);
  }

  render() {
    const { questions, tags } = this.props;

    console.log('tags', tags);

    return (
      <div className="col-xs-6">
        <Modal
          dialogClassName="add-question-modal"
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Question</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>
                Question Bank
              </Col>
              <Col sm={8}>
                <select value={100} onChange={this.handleChange}>
                  <option value="100">Math</option>
                  <option value="101">Science</option>
                  <option value="102">General</option>
                </select>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={4}>
                Tags
              </Col>
              <Col sm={8}>
                <select onChange={this.handleTagsChange}>
                  {tags.map(t =>
                    <option key={t.type} value={t.type}>
                      {t.name}
                    </option>,
                  )}
                </select>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={12}>
                <div className="m15">
                  <QuestionList
                    questions={questions}
                    onEdit={this.onEditQuestion}
                  />
                </div>
              </Col>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Cancel</Button>
            <Button onClick={this.handleAddQuestion}>Add</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

AddQuestion.propTypes = {
  show: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  onAddQuestion: PropTypes.func,
};

AddQuestion.defaultProps = {
  isEditMode: false,
  tags: [],
};

function getQuestionsByTag(questions, tag) {
  if (!tag || tag === 'all') {
    return questions;
  }
  return questions.filter(q => q.tags.find(t => t.type === tag));
}

const mapStateToProps = (state, ownProps) => ({
  questions: getQuestionsByTag(
    state.questionPapers.questions,
    state.questionPapers.selectedTag,
  ),
  tags: state.question.tags,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuestionsByQuestionBank: id => {
    dispatch(fetchQuestionsByQuestionBank(id));
  },
  addQuestionTagChange: bindActionCreators(addQuestionTagChange, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
