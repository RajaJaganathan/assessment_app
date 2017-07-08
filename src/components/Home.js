import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="app__description">
        <h2>Easy test maker online</h2>
        <p>
          This is the last online exam system you will ever need!
          With our easy test maker you will set up your own engaging exams
          that fit any kind of difficulty level.
          Build and create your online exams & tests with great ease and
          provide your users with appropriate feedback, so they will have a
          rich learning experience.
        </p>
        <p>
          ExamBuilder’s powerful reporting and analytics identify areas of strength and weakness across the organization to give executives visibility into what improves performance and actionable intelligence they can put to use.
        </p>

        <Link to="/login">Login</Link>

      </div>
    );
  }
}

export default Home;
