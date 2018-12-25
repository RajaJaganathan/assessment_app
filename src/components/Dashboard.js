import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function DashboardItem({ item, id }) {
    return (
        <div key={id} className="col-sm-6 col-md-4 dashboard__item">
            <div className="thumbnail">
                <img
                    src="images/assessment_icon.png"
                    alt="..."
                    className="dashboard__thumbnail"
                />
                <div className="caption">
                    <h3>Math Assessment</h3>
                    <p>
                        Mathematical Knowledge test questions are designed to test your
                        knowledge of general mathematical rules and principles
            </p>
                    <p>
                        <Link
                            to="/assessment"
                            className="btn btn-primary mR20"
                            role="button"
                        >
                            Take Assessment
              </Link>
                        <Link to="/assessment" className="btn btn-primary" role="button">
                            Help
              </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

DashboardItem.propTypes = {
    item: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired
}

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{}, {}, {}, {}, {}]
        };
    }
    render() {
        return (
            <div className="dashboard">
                <div className="row">
                    {this.state.list.map((item, index) =>
                        <DashboardItem key={index} item={item} id={index} />
                    )}
                </div>
            </div>
        );
    }
}

export default Dashboard;
