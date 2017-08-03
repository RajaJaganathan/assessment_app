import React from 'react';
import { Link } from 'react-router-dom';

const AssessmentInfo = () =>
  (<div className="assessment">
    <h2>MATH TEST DESCRIPTION</h2>
    <p>
      The math placement test is a comprehensive multiple choice computer test
      designed to help you review your readiness in a math course on which you
      are best prepared and in which you can be successful. The test is
      comprised of 4 math skill levels: Algebra, Elementary Algebra,
      Intermediate Algebra, and Pre-Calculus. The tests are 45 minutes, except
      the Pre-Calculus, it is 1 hour; however please allow time to take two
      levels. No calculators allowed on the test. Students will answer a
      questionnaire to determine the starting math test level.
    </p>
    <Link to="/questions">
      <button type="button" className="btn btn-default">
        Begin Test
      </button>
    </Link>
    <div className="assessment__items">
      {/* <div className="col-sm-6 col-md-4 assessment__item">
            <div className="thumbnail">
              <div className="caption">
                <h3>Math Assessment</h3>
                <p>
                  Mathematical Knowledge test questions are designed to test your
                  knowledge of general mathematical rules and principles
                </p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">
                    Take Assessment
                  </a>
                  {" "}
                  <a href="#" className="btn btn-default" role="button">Help</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 assessment__item">
            <div className="thumbnail">
              <div className="caption">
                <h3>Math Assessment</h3>
                <p>
                  Mathematical Knowledge test questions are designed to test your
                  knowledge of general mathematical rules and principles
                </p>
                <p>
                  <a href="#" className="btn btn-primary" role="button">
                    Take Assessment
                  </a>
                  {" "}
                  <a href="#" className="btn btn-default" role="button">Help</a>
                </p>
              </div>
            </div>
          </div> */}
    </div>
  </div>);

export default AssessmentInfo;
