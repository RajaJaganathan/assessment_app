import React, { Component } from 'react';
import PropTypes from 'prop-types';

import get from 'lodash/get';

/* eslint-disable */
export class Columns extends Component {
  render() {
    const { dataProvider, children } = this.props;
    const columns = children.map(column => column.props);

    return (
      <table className="table table-bordered table-hover">
        <GridHeader children={children} />
        <GridBody dataProvider={dataProvider} columns={columns} />
      </table>
    );
  }
}

export class GridHeader extends Component {
  render() {
    const { children } = this.props;
    const columns = children.map((child, idx) => {
      const { headerRenderer: HeaderRenderer = GridColumn } = child.props;
      return <HeaderRenderer key={idx} data={'data'} {...child.props} />;
    });
    return (
      <thead>
        <tr>
          {columns}
        </tr>
      </thead>
    );
  }
}

export class GridColumn extends Component {
  render() {
    const { headerText } = this.props;
    return (
      <th>
        {headerText}
      </th>
    );
  }
}

GridColumn.propTypes = {
  dataField: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired
};

export class GridCell extends Component {
  render() {
    const { row, dataField, column } = this.props;
    const Formatter = column.formatter;
    return (
      <td>
        {Formatter
          ? <Formatter input={get(row, dataField)} />
          : get(row, dataField)}
      </td>
    );
  }
}

export class GridRow extends Component {
  render() {
    const { row, children, columns } = this.props;
    const cells = columns.map((column, idx) => {
      const ItemRenderer = column.itemRenderer ? column.itemRenderer : GridCell;
      return (
        <ItemRenderer
          key={idx}
          row={row}
          dataField={column.dataField}
          column={column}
        />
      );
    });

    return (
      <tr>
        {cells}
      </tr>
    );
  }
}

export class GridBody extends Component {
  render() {
    const { dataProvider, columns } = this.props;
    const rows = dataProvider.map((row, idx) =>
      <GridRow key={idx} row={row} columns={columns} />
    );
    return (
      <tbody>
        {rows}
      </tbody>
    );
  }
}

export class ItemRenderer extends Component {
  render() {
    return (
      <td>
        {this.props.children}
      </td>
    );
  }
}

class DataGrid extends Component {
  constructor() {
    super();
    this.grid = null;
  }

  componentDidMount() {
    this.grid.addEventListener('scroll', evt => {
      console.log('scrollTop evt', evt.target.scrollTop);
    });
  }

  render() {
    const { dataProvider, children } = this.props;
    const columns = React.Children.toArray(children).map(child =>
      React.cloneElement(child, {
        dataProvider: dataProvider
      })
    );
    return (
      <div ref={grid => (this.grid = grid)} className="table-wrapper">
        {columns}
      </div>
    );
  }
}

export default DataGrid;
