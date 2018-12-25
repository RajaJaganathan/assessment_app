import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button, Checkbox } from 'react-bootstrap';

class QuestionsList extends Component {
  handleCheckboxChange(item) {
    item.selected = !item.selected;
  }

  renderRow() {
    const { questions = [], isEditMode } = this.props;

    if (!questions || !questions.length) {
      return <tr><td colSpan="4"> No data available</td></tr>;
    }

    return (
      questions &&
      questions.map((item, idx) =>
        <tr key={item._id}>
          {!isEditMode &&
            <td>
              <input
                type="checkbox"
                checked={item.selected}
                onChange={() => this.handleCheckboxChange(item)}
              />
            </td>}
          <td>
            {item.text}
          </td>
          <td>
            {item.tags &&
              item.tags.map(tag =>
                <Button key={tag.type} className="mR5 badge grey">
                  {tag.name}
                </Button>,
              )}
          </td>
          {isEditMode &&
            <td>
              <Button
                className="mR5 btn-primary"
                onClick={() => this.props.onEdit(item)}
              >
                Edit
              </Button>
            </td>}
          {isEditMode &&
            <td>
              <Button
                className="mR5 btn-primary"
                onClick={() => this.props.onDelete(item)}
              >
                Delete
              </Button>
            </td>}
        </tr>,
      )
    );
  }

  render() {
    const { isEditMode } = this.props;
    return (
      <table className="table table-hover text-left">
        <thead>
          <tr>
            {!isEditMode && <th>Selection</th>}
            <th>Questions</th>
            {!isEditMode && <th>Tags</th>}
            {isEditMode && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {this.renderRow()}
        </tbody>
      </table>
    );
  }
}

QuestionsList.propsType = {
  questions: propTypes.array,
  isEditMode: propTypes.bool.isRequired,
  onEdit: propTypes.func,
  onAdd: propTypes.func,
  onDelete: propTypes.func,
};

QuestionsList.defaultProps = {
  questions: [],
};

export default QuestionsList;
