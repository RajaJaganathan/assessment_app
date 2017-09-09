import React from 'react';
import { Button } from 'react-bootstrap';

const DashboardCard = props =>
  <div key={props.key} className="col-sm-6 col-md-4 dashboard__item">
    <div className="thumbnail">
      <img
        src="images/assessment_icon.png"
        alt="..."
        className="dashboard__thumbnail"
      />
      <div className="caption">
        <h3>
          {props.title}
        </h3>
        <p>
          {props.desc}
        </p>
        <p>
          <Button
            className="btn btn-primary mR20"
            onClick={props.onActionClick}
          >
            {props.actionText}
          </Button>
          <Button
            className="btn btn-primary"
            role="button"
            onClick={props.onHelpClick}
          >
            {props.helpText}
          </Button>
        </p>
      </div>
    </div>
  </div>;

DashboardCard.defaultProps = {
  title: 'title',
  desc: 'description text here',
};

export default DashboardCard;
