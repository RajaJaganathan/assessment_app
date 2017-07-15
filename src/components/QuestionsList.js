import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Modal, Button, ProgressBar } from "react-bootstrap";
import { DashboardCard } from "./DashboardCard";

class QuestionsList extends Component {
  static propsType = {
    questions: propTypes.array,
    onEdit:propTypes.func
  };

  static defaultProps = {
    questions: []
  };

  constructor(props) {
    super(props);
  }

  renderRow() {
    const { questions } = this.props;
    return (
      questions &&
      questions.map(item => {
        return (
          <tr key={item.questionNo}>
            <td>
              {item.questionText}
            </td>
            <td>
              {item.tags &&
                item.tags.map(tag => {
                  return (
                    <Button key={tag.type} className="mR10">
                      {tag.name}
                    </Button>
                  );
                })}
            </td>
            <td>
              <Button onClick={()=>this.props.onEdit(item)}>Edit</Button>
            </td>
          </tr>
        );
      })
    );
  }

  render() {
    const { questions } = this.props;
    return (
      <table className="table table-hover text-left">
        <thead>
          <tr>
            <th>Questions</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    );
  }
}

export default QuestionsList;
