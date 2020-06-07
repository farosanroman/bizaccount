import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import { createMuiTheme, ThemeProvider,makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import IconButton from '@material-ui/core/IconButton';
import Title from '../title';
import {BALGEN} from '../../data/balgen';
const theme2 = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
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


function weight(nivel){
  if (nivel==1)return 800
  if (nivel==2)return 600
  if (nivel==3)return 550
  if (nivel==4)return 500
   
}

function Mayana(){
  const classes = useStyles();
  const mayana=[{FECHA:"6 Juno 2020",ANTER:10000,DEBE:20000,HABER:0,ACTUAL:30000},{FECHA:"7 Juno 2020",ANTER:30000,DEBE:10000,HABER:0,ACTUAL:40000},{FECHA:"7 Juno 2020",ANTER:40000,DEBE:0,HABER:5000,ACTUAL:35000},{FECHA:"7 Juno 2020",ANTER:35000,DEBE:0,HABER:10000,ACTUAL:25000}]
  return(    <div className={classes.root}>
    <Title>Mayor Analitico</Title>
  <Paper className={classes.paper}>
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Cuenta</TableCell>
          <TableCell align="right">Debito</TableCell>
          <TableCell align="right">Credito</TableCell>
          <TableCell align="right">Saldo Actual</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      <TableRow key={0}>
            <TableCell component="th" scope="row"></TableCell>

            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">{mayana[0].ANTER}</TableCell>
          </TableRow>
        {mayana.map(row => (
          <TableRow key={row.cuenta}>
            <TableCell component="th" scope="row">{row.FECHA} </TableCell>

            <TableCell align="right">{row.DEBE}</TableCell>
            <TableCell align="right">{row.HABER}</TableCell>
            <TableCell align="right">{row.ACTUAL}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
</div>
)

} 
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
const auxiliares=[{
  "CIA": "INAZZ20",
  "CUENTA": 15005014001,
  "DESCRIPCION": "Auxi 1",
  "TIPO_AUXILIAR": "AF",
  "AUXILIAR": "0",
  "SALDO_MONT_ANTER": 45837698.81,
  "DEBITO_MONT_PERI": 0,
  "CREDITO_MONT_PERI": 0,
  "SALDOMES": 0,
  "SALDO_MONT_ACTUAL": 45837698.81,
  "NIVEL": 4,
  "NIVEL2": 4,
  "DAUXILIAR": "",
  "NIVEL_EDT": 0
},
{
  "CIA": "INAZZ20",
  "CUENTA": 15005014099,
  "DESCRIPCION": "Auxi 2",
  "TIPO_AUXILIAR": "AF",
  "AUXILIAR": "0",
  "SALDO_MONT_ANTER": -13507614.46,
  "DEBITO_MONT_PERI": 0,
  "CREDITO_MONT_PERI": 0,
  "SALDOMES": 0,
  "SALDO_MONT_ACTUAL": -13507614.46,
  "NIVEL": 4,
  "NIVEL2": 4,
  "DAUXILIAR": "",
  "NIVEL_EDT": 0
},
{
  "CIA": "INAZZ20",
  "CUENTA": 15005016000,
  "DESCRIPCION": "Auxi 3",
  "TIPO_AUXILIAR": "00",
  "AUXILIAR": "XXXXXX",
  "SALDO_MONT_ANTER": 165065833.59,
  "DEBITO_MONT_PERI": 0,
  "CREDITO_MONT_PERI": 0,
  "SALDOMES": 0,
  "SALDO_MONT_ACTUAL": 165065833.59,
  "NIVEL": 3,
  "NIVEL2": 3,
  "DAUXILIAR": "",
  "NIVEL_EDT": 0
},
{
  "CIA": "INAZZ20",
  "CUENTA": 15005016001,
  "DESCRIPCION": "Auxi 4",
  "TIPO_AUXILIAR": "AF",
  "AUXILIAR": "0",
  "SALDO_MONT_ANTER": 258307995.6,
  "DEBITO_MONT_PERI": 0,
  "CREDITO_MONT_PERI": 0,
  "SALDOMES": 0,
  "SALDO_MONT_ACTUAL": 258307995.6,
  "NIVEL": 4,
  "NIVEL2": 4,
  "DAUXILIAR": "",
  "NIVEL_EDT": 0
},]
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
        {(row.NIVEL>3)&&
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        }
        </TableCell>
        <TableCell align="left">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.DESCRIPCION}</div>} </TableCell>
           <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.SALDO_MONT_ANTER.toLocaleString( 'de-DE')}</div>}</TableCell>
           <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.DEBITO_MONT_PERI.toLocaleString( 'de-DE')}</div>}</TableCell>
           <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.CREDITO_MONT_PERI.toLocaleString( 'de-DE')}</div>}</TableCell>
           <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(row.NIVEL)}}>{row.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
            
      </TableRow>
      {(row.NIVEL>3)&&
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Auxiliares (click para el Mayor Analitico)
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Auxiliar</TableCell>
                 
                    <TableCell align="right">Anterior</TableCell>
                    <TableCell align="right">Debito</TableCell>
                    <TableCell align="right">Credito</TableCell>
                    <TableCell align="right">Actual</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {auxiliares.map((auxiRow,i) => (
                    <TableRow key={auxiRow.CUENTA+i}>
                      <TableCell align="left">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(auxiRow.NIVEL)}}>{auxiRow.DESCRIPCION}</div>} </TableCell>
                      <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(auxiRow.NIVEL)}}>{auxiRow.SALDO_MONT_ANTER.toLocaleString( 'de-DE')}</div>}</TableCell>
                      <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(auxiRow.NIVEL)}}>{auxiRow.DEBITO_MONT_PERI.toLocaleString( 'de-DE')}</div>}</TableCell>
                     <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(auxiRow.NIVEL)}}>{auxiRow.CREDITO_MONT_PERI.toLocaleString( 'de-DE')}</div>}</TableCell>
                     <TableCell align="right">{<div style={{  color: '#2E2E2E',fontSize:14,fontWeight:weight(auxiRow.NIVEL)}}>{auxiRow.SALDO_MONT_ACTUAL.toLocaleString( 'de-DE')}</div>}</TableCell>
            
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
}
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};


export  function BalanceComprobacion() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

 

  

  

  
//   console.log(cuenta)
  return (
    <div className={classes.root}>
  
  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
  </Button>
  <Dialog onClose={handleClose}  fullWidth={'true'}  maxWidth={'md'} aria-labelledby="customized-dialog-title" open={open}>
       
        <DialogContent dividers>
         <Mayana />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cerrar
          </Button>
        </DialogActions>
   </Dialog>

        <Title>Balance Comprobacion</Title>
  
      <Paper className={classes.paper}>

      <TableContainer component={Paper}>
      <Table  size="small" aria-label="a dense table">
        
        <TableBody>
          {BALGEN.map((row,index) => (
            (row.NIVEL>2)&&<Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>






     
       
      </Paper>
    </div>
  );
}