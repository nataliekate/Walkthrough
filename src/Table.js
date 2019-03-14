import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
}

const TableBody = (props) => {
  const rows = props.tableData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td><button type="button" className="btn btn-primary" onClick={() => props.removePerson(index)}>Delete</button></td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
}

class Table extends Component {
  render() {
    // destructuring assignment
    const { tableData, removePerson } = this.props;

    return (
      <table className="table">
        <TableHeader />
        <TableBody tableData={tableData} removePerson={removePerson} />
      </table>
    )
  }
}

export default Table;