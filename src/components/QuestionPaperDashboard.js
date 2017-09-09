import React, { Component } from 'react';

import { DashboardCard } from './DashboardCard';

class QuestionPaperDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}, {}, {}, {}, {}],
    };
  }

  renderDashboardCard(item, idx) {
    return (
      <DashboardCard
        key={idx}
        title={item.title}
        desc={item.desc}
        helpText="Publish"
      />
    );
  }

  render() {
    return (
      <div className="dashboard">
        <div className="row">CHECKS
          {this.state.list.map((item, index) =>
            this.renderDashboardCard(item, index),
          )}
        </div>
      </div>
    );
  }
}

export default QuestionPaperDashboard;
