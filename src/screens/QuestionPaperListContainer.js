import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button, ProgressBar } from "react-bootstrap";

import DashboardCard from '../components/DashboardCard';

class QuestionPaperListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <h3> Loading ... </h3> : null}
        <DashboardCard
          title="Math Question Paper - Feb, 2017"
          desc="Contains all questions"
          actionText="Manage"
          helpText="Help"
        />
        <DashboardCard
          title="General Question Paper - Jul, 2017"
          desc="Contains all questions paper here"
          actionText="Manage"
          helpText="Help"
        />
        <DashboardCard
          title="Computer Question Paper - Oct, 2015"
          desc="Contains all questions paper here"
          actionText="Manage"
          helpText="Help"
        />
      </div>
    );
  }
}

QuestionPaperListContainer.defaultProps = {
  isLoading: true
};

// const mapDispatchToProps = dispatch => {
//   return {
//     loadQuestions: () => dispatch(loadQuestions())
//   };
// };

// const mapStateToProps = state => {
//   return {
//     questions: state.question.questions
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(
//   QuestionBuilderContainer
// );

export default QuestionPaperListContainer;
