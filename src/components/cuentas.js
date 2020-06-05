import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Title from './title';
import {CUENTAS} from '../data/cuentas';

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import { plancuentas,tipoauxi,auxi,filterCuentas } from '../store'
//alert(JSON.stringify(CUENTAS))
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

export  function Cuentas() {
  const classes = useStyles();
  const pcuentas = useRecoilValue(plancuentas);
  const fcuentas = useRecoilValue(filterCuentas);
  const tauxi = useRecoilValue(tipoauxi);
  const [aux, setAux] = useRecoilState(auxi);
 // const cuentas = useRecoilValue(filterCuentas);
  //console.log(cuentas)
  const handleChangeTA = (event) => {
     setAux(event.target.value)      
  };
 // console.log(fcuentas)
  return (
    <div className={classes.root}>
        <Title>Plan de Cuentas (Institución Financiera)</Title>
      <Paper className={classes.paper}>
      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={aux}
          onChange={handleChangeTA}
        >
          {tauxi.map(a=>(
            <MenuItem value={a}>{a}</MenuItem>
          ))}
         
     
        </Select>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Cuenta</TableCell>
              <TableCell align="left">Descripcion</TableCell>
              <TableCell align="center">C</TableCell>
              <TableCell align="center">NAT</TableCell>
              <TableCell align="center">AUX</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fcuentas.map(row => (
              <TableRow key={row.CUENTA}>
                <TableCell component="th" scope="row">{row.CUENTA} </TableCell>
                <TableCell align="left">{row.DESCRIP} </TableCell>
                <TableCell align="left">{row.CIRCULANTE} </TableCell>           
                <TableCell align="left">{row.NATURALEZA} </TableCell>           
                <TableCell align="left">{row.AUXILIAR} </TableCell>           
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}