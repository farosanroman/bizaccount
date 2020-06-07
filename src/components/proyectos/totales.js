
import React from 'react';
import Circle from 'react-circle';
import CountUp from 'react-countup';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import { Grid, Paper, Typography } from "@material-ui/core";


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Title from './title';
//import { findProps } from 'devextreme-react/core/template';
    export default function Totales(props) {
            return (
                <React.Fragment>

                        
                            <Card >
                               <Title>{'Total Inmuebles'}</Title>
                               
                               
                                    <Table><TableRow><TableCell>
                                    <Circle
                                            animate={true} // Boolean: Animated/Static progress
                                            animationDuration="3s" //String: Length of animation
                                            responsive={false} // Boolean: Make SVG adapt to parent size
                                            size={80} // Number: Defines the size of the circle.
                                            lineWidth={30} // Number: Defines the thickness of the circle's stroke.
                                            progress={33.33} // Number: Update to change the progress and percentage.
                                            progressColor={'green'}  // String: Color of "progress" portion of circle.
                                            bgColor={props.bcolor} // String: Color of "empty" portion of circle.
                                            textColor="#3b3e66" // String: Color of percentage text color.percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                                        roundedStroke={true}
                            textStyle={{
                                fontSize: '60px', fontWeight: 'bold'
                            }} // Boolean: Rounded/Flat line ends
                                            showPercentage={true} // Boolean: Show/hide percentage.
                                            showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                                        />
                                    
                                        </TableCell><TableCell>
                                    <Typography component="p" variant="h4">
                                         
                                            <CountUp
                                            start={0}
                                            end={230}
                                            duration={4}
                                            separator="."
                                            decimals={0}
                                            decimal=","
                                            prefix=""
                                            suffix=""
                                        />
                                        </Typography>
                                        <span className="text-muted">{'Toral Inmuebles'}</span>
                                        </TableCell></TableRow></Table> 
                         
                            </Card>
     
                </React.Fragment>
            );
    }