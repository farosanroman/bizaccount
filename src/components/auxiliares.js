import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from './title';
import {AUXILIARES} from '../data/auxiliares';
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

export  function Auxiliares() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Title>Auxiliares de 'BD' Bancos</Title>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell align="left">Auxiliar</TableCell>
              <TableCell align="center">Descripcion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {AUXILIARES.map(row => (
              <TableRow key={row.Auxiliar}>
                <TableCell component="th" scope="row">{row.TipoAuxiliar} </TableCell>
                <TableCell align="left">{row.Auxiliar} </TableCell>
                <TableCell align="left">{row.Descripcion} </TableCell>        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}