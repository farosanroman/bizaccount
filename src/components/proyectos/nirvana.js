import React ,{useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Title from './title';
import Totales from './totales'
//import {CUENTAS} from '../../data/cuentas';

//alert(JSON.stringify(CUENTAS))
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  table: {
    minWidth: 650,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const drawerWidth = 240;


export  function Nirvana() {
  const classes = useStyles();
  
 // console.log(fcuentas)
 const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
      <Title>Avance del Proyecto</Title>
          <Grid container spacing={3}>
            {/* Chart */}

            <Grid item xs={12} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Totales />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>

            <Grid item xs={12} md={6} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>






            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
         
        </Container>
      
     
    </div>
  );
}