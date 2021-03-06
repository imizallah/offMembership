/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/display-name */
import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { useTable, usePagination, useSortBy } from 'react-table';
import classnames from 'classnames';
import DatatablePagination from 'components/DatatablePagination';
import { NavLink } from 'react-router-dom';

// import products from 'data/products';
const products = [{
  name: 'Josh Broslin',
  phone: '080xxxxxxx',
 location: "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  type: 'Deposit'
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxx',
 location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxx',
 location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxx',
 location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxxx',
  location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxxx',
  location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  type: 'Withdrawal'
}, {
  name: 'Josh Broslin',
  phone: '080xxxxxxxx',
  location:  "Block 2 Hill, New Estate Abuja",
  credit: 'N56,000',
  
}]
function Table({ columns, data, divided = false, defaultPageSize = 10 }) {
  const defaultColumn = React.useMemo(
    () => ({
      height: 5,
      minHeight: 5,
      maxHeight: 5,
    }),
    []
  )
  const {
    getTableProps,
    getTableBodyProps,
    prepareRow,
    headerGroups,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      defaultColumn,
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: defaultPageSize },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table
        {...getTableProps()}
        className={`r-table table ${classnames({ 'table-divided': divided })}`}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} className='border-bottom pb-1'>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  key={`th_${columnIndex}`}
                  style={{ fontSize: "40em" }}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={`${column.isSorted
                    ? column.isSortedDesc
                      ? 'sorted-desc'
                      : 'sorted-asc'
                    : ''} 
                    font-family-m
                      `
                  }
                >
                  {column.render('Header')}
                  <span />
                </th>
              ))}


            </tr>

          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td
                    key={`td_${cellIndex}`}
                    {...cell.getCellProps({
                      className: cell.column.cellClass,
                    })}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <DatatablePagination
        page={pageIndex}
        pages={pageCount}
        canPrevious={canPreviousPage}
        canNext={canNextPage}
        pageSizeOptions={[4, 10, 20, 30, 40, 50]}
        showPageSizeOptions={false}
        showPageJump={false}
        defaultPageSize={pageSize}
        onPageChange={(p) => gotoPage(p)}
        onPageSizeChange={(s) => setPageSize(s)}
        paginationMaxSize={pageCount}
      />
    </>
  );
}

const ReactTableWithPaginationCard = () => {
  const cols = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: '',
        cellClass: ' py-0 my-0 align-items-center list-item-heading w-5',
        Cell: (props) => <p className='my-2 py-1 font-weight-bold mb-0 py-0 mr-5'>{(props.cell.row.id) * 1 + 1}</p>,
      },
      {
        Header: 'NAME',
        accessor: 'name',
        cellClass: 'mb-0 py-0 my-0 font-family-m align-items-center w-20',
        Cell: (props) => <h6 className='my-2 py-1 py-0 mb-0'>{props.value}</h6>,
      },
      {
        Header: 'Phone Numbers',
        accessor: 'phone',
        cellClass: 'mb-0 py-0 my-0 align-items-center font-family-m w-20',
        Cell: (props) => <p className='my-2 py-1 py-0 mb-0'>{props.value}</p>,
      },
      {
        Header: 'LOCATION',
        accessor: 'location',
        cellClass: 'mb-0 py-0 my-0 align-items-center font-family-m w-30',
        Cell: (props) => <p className='my-2 py-1 py-0 mb-0 text-grey'>{props.value}</p>,
      },
      {
        Header: 'Credit',
        accessor: 'credit',
        cellClass: 'mb-0 py-0 my-0 align-items-center font-family-m w-20',
        Cell: (props) => <p className='my-2 py-1 py-0 mb-0'>{props.value}</p>,
      },
      {
        Header: 'ACTION',
        accessor: 'type',
        cellClass: 'mb-0 py-0 my-0 align-items-center font-family-m w-20',
        Cell: () => <NavLink color='primary' className='mt-2 py-1 py-0 mb-0 bg-primary btn' to='/app/dashboards/evp/details' style={{fontSize:'10px'}}>VIEW</NavLink>,
      },
    ],
    []
  );

  return (
    <Card className="mb-4">
      <CardBody>
        <h3 className='font-weight-bold'>

          SUB EVPS
        </h3>
        <Table columns={cols} data={products} getTdProps={() => ({ style: { height: '20px' } })} />
      </CardBody>
    </Card>
  );
};

export default ReactTableWithPaginationCard;

