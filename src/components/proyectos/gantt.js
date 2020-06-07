import React, { Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";

import Chart  from 'react-google-charts';
const useStyles = makeStyles({
  card: {
    maxWidth: 350,
  },
 // toolbarMargin: theme.mixins.toolbar
});
//const onClick = content => () => {
//  setOpen(false);
//  setContent(content);
//};
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}}
function Gantt(props) {
  //alert(JSON.stringify(props.criteria))

  
  const classes = useStyles();
 // type: 'horizontalBar',
//https://github.com/mui-org/material-ui/issues/15066
  return (
    <div style={{ marginTop: 10, padding: 30 } }>
<Chart
  width={'100%'}
  height={'400px'}
  chartType="Gantt"
  loader={<div>Loading Chart</div>}
  data={[
    [
      { type: 'string', label: 'Task ID' },
      { type: 'string', label: 'Task Name' },
      { type: 'string', label: 'Resource' },
      { type: 'date', label: 'Start Date' },
      { type: 'date', label: 'End Date' },
      { type: 'number', label: 'Duration' },
      { type: 'number', label: 'Percent Complete' },
      { type: 'string', label: 'Dependencies' },
    ],
    [
      '2015Summer',
      'Mov Tierra',
      'summer',
      new Date(2015, 5, 21),
      new Date(2015, 8, 20),
      null,
      0,
      null,
    ],
    [
      '2015Autumn',
      'Excavacion',
      'autumn',
      new Date(2015, 8, 21),
      new Date(2015, 11, 20),
      null,
      0,
      null,
    ],
    [
      '2015Winter',
      'Fuandaciones',
      'winter',
      new Date(2015, 11, 21),
      new Date(2016, 2, 21),
      null,
      0,
      null,
    ],
    [
      'Football',
      'Estructura',
      'sports',
      new Date(2014, 8, 4),
      new Date(2015, 1, 1),
      null,
      100,
      null,
    ],
    [
      'Baseball',
      'Fachada',
      'sports',
      new Date(2015, 2, 31),
      new Date(2015, 9, 20),
      null,
      14,
      null,
    ],
    [
      'Basketball',
      'Electricas',
      'sports',
      new Date(2014, 9, 28),
      new Date(2015, 5, 20),
      null,
      86,
      null,
    ],
    [
      'Hockey',
      'Jardines',
      'sports',
      new Date(2014, 9, 8),
      new Date(2015, 5, 21),
      null,
      89,
      null,
    ],  ]}
  options={{
    height: 400,
    gantt: {
      trackHeight: 30,
    },
  }}
  rootProps={{ 'data-testid': '2' }}
/>
    </div>
  );
}



export default Gantt;