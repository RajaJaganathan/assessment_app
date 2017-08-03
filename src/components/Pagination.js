import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.onNext = this.onNext.bind(this);
    this.onPrev = this.onPrev.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      currentPage: 1
    };
  }

  onPrev() {
    this.props.onPrev();
  }

  onNext() {
    this.props.onNext();
  }

  onChange() {
    this.props.onChange();
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <button
            type="button"
            onClick={this.onPrev}
            className={
              this.props.currentPage === 1
                ? 'btn btn-primary pull-left'
                : 'btn btn-primary pull-left disabled'
            }
          >
            Prev
          </button>

          <button
            type="button"
            onClick={this.onNext}
            className="btn btn-primary pull-right"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

Pagination.propTypes = {
  source: PropTypes.array.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

Pagination.defaultProps = {
  onChange() {},
  onPrev() {},
  onNext() {}
};

export default Pagination;
