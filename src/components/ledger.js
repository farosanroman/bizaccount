import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from './title';
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(cuenta,saldoant,debito,credito,saldoactual) {
  return {cuenta,saldoant,debito,credito,saldoactual};
}

const rows = [
 // createData('Banesco', 159, 6.0, 24, 4.0),
  createData('Mercantil', '0,00','120.289.234,45','120.289.234,45','0,00'),
  createData('Banesco', '0,00','120.289.234,45','120.289.234,45','0,00'),
  createData('Venezolano', '0,00','120.289.234,45','120.289.234,45','0,00'),
  createData('BOD', '0,00','120.289.234,45','120.289.234,45','0,00'),
  createData('Venezuela', '0,00','120.289.234,45','120.289.234,45','0,00'),
  createData('Neto', '234.345.333,23','0,00','140.289.234,45','380.893.389,34'),
  createData('IVA', '34.345.333,23','40.289.234,45','0,00','80.893.389,34'),
  createData('COMISION', '4.345.333,23','4.289.234,45','0,00','8.893.389,34'),
  
];

export  function Ledger() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Title>Balance de Comprobacion</Title>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Cuenta</TableCell>
              <TableCell align="right">Saldo Anterior</TableCell>
              <TableCell align="right">Debito</TableCell>
              <TableCell align="right">Credito</TableCell>
              <TableCell align="right">Saldo Actual</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.cuenta}>
                <TableCell component="th" scope="row">{row.cuenta} </TableCell>

                <TableCell align="right">{row.saldoant} </TableCell>
                <TableCell align="right">{row.debito}</TableCell>
                <TableCell align="right">{row.credito}</TableCell>
                <TableCell align="right">{row.saldoactual}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}