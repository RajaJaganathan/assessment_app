import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class DashboardCard extends Component {
  render() {
    return (
      <div key={this.props.key} className="col-sm-6 col-md-4 dashboard__item">
        <div className="thumbnail">
          <img
            src="images/assessment_icon.png"
            alt="..."
            className="dashboard__thumbnail"
          />
          <div className="caption">
            <h3>
              {this.props.title}
            </h3>
            <p>
              {this.props.desc}
            </p>
            <p>
              <Button
                className="btn btn-primary mR20"
                onClick={this.props.onActionClick}
              >
                {this.props.actionText}
              </Button>
              <Button className="btn btn-primary" role="button">
                {this.props.helpText}
              </Button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

DashboardCard.defaultProps = {
  title: 'title',
  desc: 'description text here'
};

export default DashboardCard;
