import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Checkbox,
  Radio,
  Modal,
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

import { uniqueId, keyBy } from 'lodash';

const Tags = ({ tags, onCheckboxChange }) =>
  <div>
    {tags.map(tag =>
      <Checkbox
        key={tag.type}
        defaultChecked={tag.checked}
        onChange={e => onCheckboxChange(tag, e)}
        className="pull-left mR10"
      >
        {tag.name}
      </Checkbox>,
    )}
  </div>;

const QuestionOptions = ({
  options,
  handleOptionChange,
  handleRadioOptionChange,
  onAddOption,
  onDeleteOption,
}) =>
  <div>
    {options &&
      options.map((item, idx) =>
        <Col sm={10} key={item.id || idx}>
          <Col componentClass={ControlLabel} sm={2}>
            {idx === 0 && 'Choice'}
          </Col>
          <Col sm={6}>
            <input
              className="col-sm-8 mR10"
              defaultValue={item.text}
              onChange={e => handleOptionChange(idx, 'text', e)}
            />
            <Radio
              name="rightChoice"
              className="col-sm-3"
              defaultChecked={item.answer}
              onChange={e => handleRadioOptionChange(idx, 'answer', e)}
            >
              answer
            </Radio>
          </Col>
          <Col sm={4}>
            <Button className="mR10" onClick={onAddOption}>
              Add
            </Button>
            <Button onClick={() => onDeleteOption(idx)}>Delete</Button>
          </Col>
        </Col>,
      )}
  </div>;

class CreateQuestionModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditMode: this.props.defaultEditMode,
      questionText: this.props.defaultQuestionText,
      options: this.props.defaultOptions,
      tags: this.props.defaultTags,
      allTags: this.props.defaultTags,
    };
    this.onAddOption = this.onAddOption.bind(this);
    this.onDeleteOption = this.onDeleteOption.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.questionText !== nextProps.questionText) {
      this.setState({ questionText: nextProps.questionText });
    }
    if (this.state.isEditMode !== nextProps.isEditMode) {
      this.setState({ isEditMode: nextProps.isEditMode });
    }

    if (this.props.options !== nextProps.options) {
      const options = nextProps.options || this.props.defaultOptions;
      this.setState({ options });
    }
    if (nextProps.tags && this.props.tags !== nextProps.tags) {
      const tags = nextProps.tags || this.props.defaultTags;
      const tagsMap = keyBy(tags, 'type');
      this.state.allTags.forEach(item => {
        item.checked = tagsMap[item.type];
      });
      this.setState({ tags: nextProps.tags });
    }
  }

  onCreateQuestion(event) {
    event.preventDefault();
    const { questionText, options, allTags, isEditMode } = this.state;
    const params = {
      questionNo: this.props.questionNo,
      questionText,
      options,
      isEditMode,
      tags: allTags.filter(item => item.checked),
    };
    if (!isEditMode) {
      params.questionNo = uniqueId('question-');
    }
    this.props.onCreate(params);
  }

  onCheckboxChange(tag, event) {
    const tags = [...this.state.allTags];
    tag.checked = event.target.checked;
    this.setState(tags);
  }

  onAddOption() {
    const newOption = {
      id: uniqueId('option-'),
    };
    const options = [...this.state.options, newOption];
    this.setState({ options });
  }

  onDeleteOption(deleteIdx) {
    const options = this.state.options.filter((item, idx) => idx !== deleteIdx);
    this.setState({ options });
  }

  handleChange(field, event) {
    this.setState({ [field]: event.target.value });
  }

  handleOptionChange(index, fieldName, event) {
    const options = [...this.state.options];
    const newObject = {
      ...options[index],
      [fieldName]: event.target.value,
    };
    options.splice(index, 1, newObject);
    this.setState({ options });
  }

  handleRadioOptionChange(index, fieldName, event) {
    const options = [...this.state.options];
    options.forEach(item => {
      item.answer = false;
    });
    options[index] = {
      ...options[index],
      [fieldName]: event.target.value === 'true',
    };
    this.setState({ options });
  }

  render() {
    const { questionText, options, allTags } = this.state;
    return (
      <div>
        <Modal
          dialogClassName="create-question-modal"
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Questions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              ref={form => {
                this.createQuestionForm = form;
              }}
              name="createQuestionForm"
              horizontal
            >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Question
                </Col>
                <Col sm={10}>
                  <FormControl
                    componentClass="textarea"
                    placeholder={questionText}
                    value={questionText}
                    onChange={e => this.handleChange('questionText', e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <QuestionOptions
                  options={options}
                  handleOptionChange={this.handleOptionChange}
                  handleRadioOptionChange={this.handleRadioOptionChange}
                  onAddOption={this.onAddOption}
                  onDeleteOption={this.onDeleteOption}
                />
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Tags
                </Col>
                <Col sm={10}>
                  <Tags
                    tags={allTags}
                    onCheckboxChange={this.onCheckboxChange}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Cancel</Button>
            <Button onClick={this.onCreateQuestion}>
              {this.state.isEditMode ? 'Update' : 'Create'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

CreateQuestionModal.propTypes = {
  questionNo: PropTypes.string,
  questionText: PropTypes.string,
  options: PropTypes.array,
  tags: PropTypes.array,
  isEditMode: PropTypes.bool,
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  onCreate: PropTypes.func,
};

CreateQuestionModal.defaultProps = {
  defaultEditMode: false,
  defaultQuestionText: 'Please enter your question here',
  defaultOptions: [
    {
      id: uniqueId('option'),
      text: '',
      answer: false,
    },
  ],
  defaultTags: [
    {
      name: 'Math',
      type: 'math',
    },
    {
      name: 'Science',
      type: 'science',
    },
    {
      name: 'General',
      type: 'general',
    },
    {
      name: 'History',
      type: 'history',
    },
    {
      name: 'Computer Science',
      type: 'computerscience',
    },
    {
      name: 'Current Affairs',
      type: 'currentaffairs',
    },
  ],
};

export default CreateQuestionModal;
