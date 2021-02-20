import React from 'react';
import {
  makeStyles,
  Grid,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    display: 'flex',
    justifyContent: 'between',
    marginTop: theme.spacing(10)
  },
  row: {
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    margin: theme.spacing(4),
    padding: theme.spacing(2, 2),
    maxHeight: '80px',
    width: '100%',
    height: '100%'
  },
  cell: {
    color: theme.palette.primary.main,
    width: '100%',
    height: '100%'
  },
  topRow: {
    backgroundColor: theme.palette.primary.main
  },
  topTxt: {
    color: '#fff'
  }
}));

function AdminTable(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {console.log(props.rows)}
      {props.rows !== [] && (
        <Grid container spacing={1} className={classes.table}>
          <TableContainer component={Paper}>
            <Table aria-label='simple table'>
              <TableHead>
                <TableRow className={classes.topRow}>
                  {props.headers.map((header, i) => {
                    if (i === 0) {
                      return (
                        <TableCell key={'cell-' + i} className={classes.topTxt}>
                          {header}
                        </TableCell>
                      );
                    } else {
                      return (
                        <TableCell
                          key={'cell-' + i}
                          align='right'
                          className={classes.topTxt}
                        >
                          {header}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {props.rows.map((row, i) => (
                  <TableRow key={'row-' + i}>
                    {row.map((cell, j) => {
                      if (j === 0) {
                        return (
                          <TableCell
                            component='th'
                            scope='row'
                            key={'cell-' + j + 20}
                          >
                            <Link
                              href={`/admin/${props.resource}/${props.rowIds[i]}`}
                            >
                              {cell}
                            </Link>
                          </TableCell>
                        );
                      } else if (j === 1) {
                        return (
                          <TableCell align='right' key={'cell-' + j + 20}>
                            <Link href={cell}>{cell}</Link>
                          </TableCell>
                        );
                      } else {
                        return (
                          <TableCell key={'cell-' + j + 20} align='right'>
                            {cell}
                          </TableCell>
                        );
                      }
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
    </div>
  );
}

export default AdminTable;
