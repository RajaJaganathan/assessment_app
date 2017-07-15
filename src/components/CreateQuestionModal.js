import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Checkbox,
  Radio,
  Modal,
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel
} from "react-bootstrap";

import {uniqueId} from "lodash";

class CreateQuestionModal extends Component {
  static propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func,
    onCreateQuestion: PropTypes.func
  };

  static defaultProps = {
    defaultQuestionText: "Please enter your question here",
    defaultOptions: [
      {
        id: uniqueId("option"),
        text: ""
      }
    ],
    defaultTags: []
  };

  constructor(props) {
    super(props);
    this.onAddOption = this.onAddOption.bind(this);
    this.onDeleteOption = this.onDeleteOption.bind(this);
    this.onCreateQuestion = this.onCreateQuestion.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.onCheckboxChange = this.onCheckboxChange.bind(this);

    this.state = {
      questionText: this.props.defaultQuestionText,
      options: this.props.defaultOptions,
      tags: this.props.defaultTags
    };
  }

  handleChange(field, event) {
    this.setState({
      [field]: event.target.value
    });
  }

  handleOptionChange(index, fieldName, event) {
    const options = [...this.state.options];
    const newObject = {
      ...options[index],
      [fieldName]: event.target.value
    };
    options.splice(index, 1, newObject);
    this.setState({
      options
    });
  }

  handleRadioOptionChange(index, fieldName, event) {
    const options = [...this.state.options];
    options.forEach(item => (item.answer = false));
    options[index] = {
      ...options[index],
      [fieldName]: event.target.value === "true"
    };
    this.setState({
      options
    });
  }

  onCheckboxChange(tag, event) {
    tag.category = event.target.value;
  }

  onAddOption() {
    const newOption = {
      id: uniqueId("option-")
    };
    const options = [...this.state.options, newOption];
    this.setState({ options });
  }

  onDeleteOption(deleteIdx) {
    const options = this.state.options.filter((item, idx) => idx !== deleteIdx);
    this.setState({ options });
  }

  onCreateQuestion(event) {
    event.preventDefault();
    const { questionText, options, tags } = this.state;
    this.props.onCreateQuestion({ questionText, options });
  }

  render() {
    const { tags, options } = this.state;

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
              ref={form => (this.createQuestionForm = form)}
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
                    placeholder="enter question"
                    onChange={this.handleChange.bind(this, "questionText")}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                {options.map((item, idx) => {
                  return (
                    <Col sm={10} key={item.id}>
                      <Col componentClass={ControlLabel} sm={2}>
                        {idx === 0 && "Choice"}
                      </Col>
                      <Col sm={6}>
                        <input
                          className="col-sm-8 mR10"
                          onChange={this.handleOptionChange.bind(
                            this,
                            idx,
                            "text"
                          )}
                        />
                        <Radio
                          name="rightChoice"
                          className="col-sm-3"
                          value={true}
                          onChange={this.handleRadioOptionChange.bind(
                            this,
                            idx,
                            "answer"
                          )}
                        >
                          {" "}Right
                        </Radio>
                      </Col>
                      <Col sm={4}>
                        <Button className="mR10" onClick={this.onAddOption}>
                          Add
                        </Button>
                        <Button onClick={() => this.onDeleteOption(idx)}>
                          Delete
                        </Button>
                      </Col>
                    </Col>
                  );
                })}
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Tags
                </Col>
                <Col sm={10}>
                  {tags.map(item => {
                    <Checkbox
                      onChange={this.onCheckboxChange.bind(this, item)}
                      className="pull-left mR10"
                    >
                      {item.name}
                    </Checkbox>;
                  })}
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Cancel</Button>
            <Button onClick={this.onCreateQuestion}>Create</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateQuestionModal;
