import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { find } from 'lodash/find';

import {
  Button,
  Modal,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

import QuestionList from '../components/QuestionsList';

import {
  fetchQuestionsByQuestionBank,
  addQuestionTagChange,
  fetchAllQuestionBanks
} from './actions';

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
    this.props.fetchAllQuestionBanks();
    this.props.fetchQuestionsByQuestionBank(this.state.questionBankId);
  }

  handleAddQuestion() {
    const questions = this.props.questions.filter(item => item.selected)
    this.props.onAddQuestion(questions);
  }

  handleChange(e) {
    this.props.fetchQuestionsByQuestionBank(e.target.value);
  }

  handleTagsChange(e) {
    this.props.addQuestionTagChange(e.target.value);
  }

  render() {
    const { questionBanks, questions, tags, isEditMode } = this.props;

    console.log('tags', tags);
    const options = questionBanks.map(q => <option value={q._id}>{q.title}</option>);
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
                <select defaultValue={100} onChange={this.handleChange}>
                  {options}
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
                    isEditMode={false}
                    onEdit={this.onEditQuestion}
                  />
                </div>
              </Col>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-default" onClick={this.props.onHide}>Cancel</Button>
            <Button className="btn-primary" onClick={this.handleAddQuestion}>Add</Button>
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
  onEditQuestion: PropTypes.func,
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
  questionBanks: state.questionPapers.modalQuestionBanks
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuestionsByQuestionBank: bindActionCreators(
    fetchQuestionsByQuestionBank,
    dispatch
  ),
  addQuestionTagChange: bindActionCreators(addQuestionTagChange, dispatch),
  fetchAllQuestionBanks: bindActionCreators(fetchAllQuestionBanks, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestion);
