import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Checkbox, Modal, Form, FormGroup, FormControl, Col, ControlLabel } from "react-bootstrap";

class CreateQuestionModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton>
            <Modal.Title>Create Questions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form ref="createQuestionForm" name="createQuestionForm" horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Question
                </Col>
                <Col sm={10}>
                  <FormControl componentClass="textarea" placeholder="enter question" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Tags
                </Col>
                <Col sm={10}>
                  <Checkbox className="pull-left"> Math </Checkbox>
                  <Checkbox className="pull-left"> General</Checkbox>
                  <Checkbox className="pull-left"> History</Checkbox>
                  <Checkbox className="pull-left"> Tamil</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button onClick={(e)=>this.props.onCreateQuestion(this.refs.createQuestionForm)}>Create</Button>
                </Col>
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

CreateQuestionModal.propTypes = {
  show:PropTypes.bool.isRequired,
  onHide:PropTypes.func,
  onCreateQuestion:PropTypes.func
};

export default CreateQuestionModal;
