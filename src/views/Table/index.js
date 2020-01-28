/* eslint-disable react/display-name */
/* eslint-disable react/no-multi-comp */
import React, { useRef, useState } from 'react';
import MaterialTable from 'material-table';
import { Divider } from '@material-ui/core';

const Table = () => {
  const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    { title: 'Birth City', field: 'birthCity', lookup: { 34: 'Daly City', 63: 'San Francisco' } }
  ];
  const data = [
    { name: 'Jonathan', surname: 'John', birthYear: 1987, birthCity: 63 },
    { name: 'John Paul', surname: 'JP', birthYear: 1972, birthCity: 34 },
    { name: 'Stanley', surname: 'Stan', birthYear: 1994, birthCity: 63 },
    { name: 'Daisy', surname: 'Day', birthYear: 2000, birthCity: 63 },
    { name: 'Kyle', surname: 'Kyle', birthYear: 2010, birthCity: 34 },
    { name: 'Joseph', surname: 'Joe', birthYear: 1992, birthCity: 34 },
    { name: 'Elizabeth', surname: 'Liz', birthYear: 1983, birthCity: 63 },
  ];

  const tableRef = useRef();
  const [state, setState] = useState({ selectedRow: null });
  const options = {
    rowStyle: rowData => ({
      backgroundColor:
        (state.selectedRow && state.selectedRow.tableData.id === rowData.tableData.id) ?
          '#EEE' : '#FFF'
    }),
    search: true,
    sorting: true
  };
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        columns={columns}
        data={data}
        onRowClick={((evt, selectedRow) => setState({ selectedRow }))}
        options={options}
        title="Demo Title" />
      <Divider style={{ margin: '20px' }} />
      <MaterialTable
        actions={[
          {
            icon: 'refresh',
            tooltip: 'Refresh Data',
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          }
        ]}
        columns={[
          {
            title: 'Avatar',
            field: 'avatar',
            render: rowData => (
              <img alt={rowData.first_name} src={rowData.avatar} style={{ height: 36, borderRadius: '50%' }} />
            ),
          },
          { title: 'Id', field: 'id' },
          { title: 'First Name', field: 'first_name' },
          { title: 'Last Name', field: 'last_name' },
        ]}
        data={query =>
          new Promise(resolve => {
            let url = 'https://reqres.in/api/users?'
            url += 'per_page=' + query.pageSize
            url += '&page=' + (query.page + 1)
            fetch(url)
              .then(response => response.json())
              .then(result => {
                resolve({ data: result.data, page: result.page - 1, totalCount: result.total, })
              })
          })
        }
        tableRef={tableRef}
        title="Refresh Data Preview"
      />
    </div>
  );
};

export default Table;
