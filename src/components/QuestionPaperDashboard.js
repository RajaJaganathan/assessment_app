import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { DashboardCard } from './DashboardCard';

class QuestionPaperDashboard extends Component {
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
    return (
      <div className="dashboard">
        <div className="row">
          {this.state.list.map((item, index) =>
            this.renderDashboardCard(item, index)
          )}
        </div>
      </div>
    );
  }
}

export default QuestionPaperDashboard;
