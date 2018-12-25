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
                <div key={idx}>
                    <Col componentClass={ControlLabel} sm={2}>
                        {idx === 0 ? 'Choice' : ''}
                    </Col>
                    <Col className="mB10" sm={10} key={item.id || idx}>
                        <div className="row">
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
                        </div>
                    </Col>
                </div>,
            )}
    </div>;

class CreateQuestionModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditMode: this.props.defaultEditMode,
            text: this.props.defaultQuestionText,
            options: this.props.defaultOptions,
            tags: this.props.defaultTags
        };
        this.onAddOption = this.onAddOption.bind(this);
        this.onDeleteOption = this.onDeleteOption.bind(this);
        this.onCreateQuestion = this.onCreateQuestion.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleRadioOptionChange = this.handleRadioOptionChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.text !== prevProps.text) {
            this.setState({ text: this.props.text });
        }
        if (this.props.isEditMode !== prevProps.isEditMode) {
            this.setState({ isEditMode: this.props.isEditMode });
        }

        if (this.props.options !== prevProps.options) {
            const options = this.props.options || this.props.defaultOptions;
            this.setState({ options });
        }
        if (this.props.tags !== prevProps.tags) {
            const tagsMap = keyBy(this.props.tags, 'type');
            const tags = this.props.defaultTags.map(item => ({
                ...item,
                checked: tagsMap[item.type]
            }))
            this.setState({ tags });
        }
    }

    onCreateQuestion(event) {
        event.preventDefault();
        const { text, options, tags, isEditMode } = this.state;
        const params = {
            questionNo: this.props.questionNo,
            text,
            options,
            isEditMode,
            tags: tags.filter(item => item.checked),
        };
        if (!isEditMode) {
            params.questionNo = uniqueId('question-');
        }
        this.props.onCreate(params);
    }

    onCheckboxChange(tag, event) {
        const tags = [...this.state.tags];
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
            [fieldName]: event.target.value === 'on',
        };
        this.setState({ options });
    }

    render() {
        const { text, options, tags } = this.state;
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
                                        placeholder={text}
                                        value={text}
                                        onChange={e => this.handleChange('text', e)}
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
                                        tags={tags}
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
    text: PropTypes.string,
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
