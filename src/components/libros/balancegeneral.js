import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import Title from '../title';
import {BALGEN} from '../../data/balgen';
const theme2 = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
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

export  function BalanceGeneral() {
  const classes = useStyles();
  function weight(nivel){
    if (nivel==1)return 800
    if (nivel==2)return 600
    if (nivel==3)return 550
    if (nivel==4)return 500
     
  }
  
  return (
    <div className={classes.root}>
        <Title>Balance General</Title>
      <Paper className={classes.paper}>
        
        <Table className={classes.table} size="small">
         
          <TableBody>
            {BALGEN.map(row => (
              
              <TableRow key={row.cuenta}>
            
                <TableCell align="left">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.DESCRIPCION}</div>} </TableCell>
                <TableCell align="right">{(row.NIVEL==4)&&<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
                <TableCell align="right">{(row.NIVEL==3)&&<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:600}}>{row.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
                <TableCell align="right">{(row.NIVEL==2)&&<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:600}}>{row.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
                <TableCell align="right">{(row.NIVEL==1)&&<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:800}}>{row.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
            </TableRow>

            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}