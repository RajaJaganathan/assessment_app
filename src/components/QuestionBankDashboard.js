import React, { Component } from 'react';

import { DashboardCard } from './DashboardCard';

class QuestionBankDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{}, {}, {}, {}, {}]
    };
  }

  renderDashboardCard(item, idx) {
    return <DashboardCard key={idx} title={item.title} desc={item.desc} />;
  }

  render() {
    const { list } = this.state
    return (
      <div className="dashboard">
        <div className="row">
          {list.map((item, index) =>
            this.renderDashboardCard(item, index)
          )}
        </div>
      </div>
    );
  }
}

export default QuestionBankDashboard;
