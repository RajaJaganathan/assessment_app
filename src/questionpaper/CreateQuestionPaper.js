import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Modal,
  Form,
  FormGroup,
  FormControl,
  Col,
  ControlLabel,
} from 'react-bootstrap';

class CreateQuestionPaper extends Component {
  constructor(props) {
    super(props);
    this.handleCreateQuestionPaper = this.handleCreateQuestionPaper.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {};
  }

  handleChange(field, e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleCreateQuestionPaper() {
    this.props.onCreateQuestionPaper(this.state);
  }

  render() {
    const { title, desc } = this.state;
    return (
      <div className="col-xs-6">
        <Modal
          dialogClassName="create-question-modal"
          show={this.props.show}
          onHide={this.props.onHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>Create Question Paper</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              ref={form => {
                this.form = form;
              }}
              name="form"
              horizontal
            >
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl
                    name="title"
                    componentClass="input"
                    placeholder="Type Question Paper Name here"
                    value={title}
                    onChange={e => this.handleChange('name', e)}
                  />
                </Col>
              </FormGroup>
              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Description
                </Col>
                <Col sm={10}>
                  <FormControl
                    name="desc"
                    componentClass="input"
                    placeholder="Type question paper description here"
                    value={desc}
                    onChange={e => this.handleChange('description', e)}
                  />
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Cancel</Button>
            <Button onClick={this.handleCreateQuestionPaper}>
              {this.props.isEditMode ? 'Update' : 'Create'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

CreateQuestionPaper.propTypes = {
  show: PropTypes.bool.isRequired,
  isEditMode: PropTypes.bool.isRequired,
  onHide: PropTypes.func,
  onCreateQuestionPaper: PropTypes.func,
};

CreateQuestionPaper.defaultProps = {
  isEditMode: false,
};

export default CreateQuestionPaper;
