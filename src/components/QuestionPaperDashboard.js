import React, { Component } from 'react';

import { DashboardCard } from './DashboardCard';

class QuestionPaperDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{}, {}, {}, {}, {}],
        };
    }

    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    {this.state.list.map((item, index) =>
                        <DashboardCard
                            key={index}
                            title={item.title}
                            desc={item.desc}
                            helpText="Publish"
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default QuestionPaperDashboard;
