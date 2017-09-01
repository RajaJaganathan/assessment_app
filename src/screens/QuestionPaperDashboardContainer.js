import React, { Component } from 'react';

import {Button} from 'react-bootstrap';
import DashboardCard from '../components/DashboardCard';

class QuestionPaperDashboardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCreateQuestionPaper = this.handleCreateQuestionPaper.bind(this);
    this.state = {
        isLoading: true
    };
  }

  componentDidMount() {

  }

  handleCreateQuestionPaper(){}

  render() {
    return (
        <div>
        <Button onClick={this.handleCreateQuestionPaper}>Create Question Paper</Button>
        {this.state.isLoading ? <h3> Loading ... </h3> : null}
      <div className="dashboard">
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
      </div>
    );
  }
}

QuestionPaperDashboardContainer.defaultProps = {
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

export default QuestionPaperDashboardContainer;
