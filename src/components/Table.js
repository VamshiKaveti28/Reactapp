import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'ID', label: 'Employee ID', minWidth: 100 },
  { id: 'name', label: 'Allowance Name', minWidth: 100 },
  { id: 'code', label: 'Allowance Code', minWidth: 100 },
  { id: 'category', label: 'Category', minWidth: 100 },
  { id: 'date', label: 'Date', minWidth: 100 },
  { id: 'Stime', label: 'Start Time', minWidth: 100 },
  { id: 'Etime', label: 'End Time', minWidth: 100 },
  { id: 'duration', label: 'Duration', minWidth: 100 },
  { id: 'premium', label: 'Premium', minWidth: 100 },
  { id: 'Adate', label: 'Applied Date', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
  
  
];

function createData(ID,name,code,category,date,Stime,Etime,duration,premium,adate,status) {
//const density = population / size;
  return { ID,name,code,category,date,Stime,Etime,duration,premium,adate,status };
}

const rows = [
 createData('MMA0210','ONCall','001','-','3/3/23','9:00 AM','10:00 PM','11:00 HR','-',"12/4/23",'Approved')
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
            <div className='Theader'>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          </div>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}