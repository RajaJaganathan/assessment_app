/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Login from './Login';

import DataGrid, {
  Columns,
  GridColumn,
  CustomGridCell
} from '../components/FlexDataGrid/DataGrid';

import { login } from './actions';

import data from '../components/FlexDataGrid/sample-data';

class NameRenderer extends Component {
  render() {
    const { row, dataField } = this.props;
    return (
      <td className="datagrid__cell">
        <a href={`/${row[dataField]}`}>
          {row[dataField]}
        </a>
      </td>
    );
  }
}

class NameHeaderRenderer extends Component {
  render() {
    const { headerText, column } = this.props;
    return (
      <th className="datagrid__header-cell">
        {headerText}
      </th>
    );
  }
}

class PriceFormatter extends Component {
  render() {
    const { input } = this.props;
    const result =
      input === null || input === undefined ? null : input.toFixed(2);
    return (
      <span>
        {result}
      </span>
    );
  }
}
class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.authSuccess) {
      if (nextProps.user && nextProps.user.isAdmin) {
        this.props.history.push('/admin');
      } else {
        this.props.history.push('/assessments');
      }
    }
  }

  onLogin(e, payload) {
    e.preventDefault();
    this.props.login(payload);
  }

  render() {
    const { authFailed } = this.props;
    return (
      <div>
          <Login onSubmit={this.onLogin} authFailed={authFailed} />
        {/* <DataGrid dataProvider={data}>
          <Columns>
            <GridColumn
              dataField="firstName"
              headerText="First Name"
              itemRenderer={NameRenderer}
              headerRenderer={NameHeaderRenderer}
            />
            <GridColumn dataField="lastName" headerText="Last Name" />
            <GridColumn
              dataField="age"
              headerText="Age"
              formatter={PriceFormatter}
            />
            <GridColumn dataField="address.city" headerText="City" />
            <GridColumn dataField="phoneNumber[0].number" headerText="Phone" />
          </Columns>
        </DataGrid> */}
      </div>
    );
  }
}

LoginContainer.propTypes = {
  user: PropTypes.any,
  authFailed: PropTypes.bool,
  authSuccess: PropTypes.bool,
  history: PropTypes.any
};

LoginContainer.defaultProps = {
  user: {},
  authFailed: true,
  authSuccess: false,
  history: PropTypes.any
};

const mapStateToProps = state => ({
  authSuccess: state.auth.authSuccess,
  user: state.auth.user,
  authFailed: state.auth.authFailed
});

const mapDispatchToProps = dispatch => ({
  login: payload => dispatch(login(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
