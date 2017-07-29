import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Button } from 'react-bootstrap';

class QuestionsList extends Component {
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
              <Button onClick={() => this.props.onEdit(item)}>Edit</Button>
            </td>
          </tr>
        );
      })
    );
  }

  render() {
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

QuestionsList.propsType = {
  questions: propTypes.array,
  onEdit: propTypes.func
};

QuestionsList.defaultProps = {
  questions: []
};

export default QuestionsList;
