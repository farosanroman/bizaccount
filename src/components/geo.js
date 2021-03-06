import React, {useEffect, useState,Fragment } from 'react';
import { Application } from '../App';
//import {antenacercana} from './helpers'
import  MapGL,{Layer,Feature,ZoomControl,GeoJSONLayer,ScaleControl} from 'react-mapbox-gl';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {antenas} from '../data/antenas.json';
//import {celular} from '../data/celular.json';

import {CIUDADESGEO} from '../data/ciudadesgeo.json';
import {usePosition} from '../hooks/useposition';
//import {useGeolocation} from '../hooks/usegeolocation';
//import { greatCircle, point,circle } from '@turf/turf';
import Title from './title';
//import Chart from 'react-google-charts';
//https://github.com/alex3165/react-mapbox-gl/issues/763
//https://www.youtube.com/watch?v=JJatzkPcmoI
//https://github.com/leighhalliday/mapbox-react-demo
var linearoja={"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[-66,9],[-80.31606674194336,25.77392392167507]]}}]}
const style={   Paper:{padding:1,marginTop:1,marginBottom:1}}
const TOKEN="pk.eyJ1IjoiZmFyb21hcGJveCIsImEiOiJjamt6amF4c3MwdXJ3M3JxdDRpYm9ha2pzIn0.V8cqmZH6dFIcxtKoaWcZZw"
  const Map = MapGL({accessToken: TOKEN });
  const mapStyle = {  flex: 1,  height: "75vh",width: "100%"};
  
  
  const useStyles = makeStyles(theme => ({

    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary
    }
  }));

  export default function Geo() {
  
//   alert(JSON.stringify(antfl))
    const classes = useStyles();

    //const { state, dispatch } = React.useContext(Application);
    const [state,setState]=useState( {
        flagLogin:false,
        geolocation:{country:"VE",countrylong:"VE",estado:"ES",municipio:"MU",municipiolong:"MUNICIPIO",ciudad:"VE",ciudadlong:"VE",urbanizacion:"URB",urbanizacionlong:"URB",ruta:"RUTA",rutalong:"RUTALONG",premisa:"PREMISA",premisalong:"PREMISALONG",postalcode:"postalcode"},
        position:{ latitude:10.4881081498923305, longitude:-66.888521423339844, timestamp:0, accuracy:0, error:null },  //hook
        positions:[],
        
        ///// GeoJSON
        lnglat:[-66.888,10.508],
        zoom:20,
        radio:3,
        /////
        centro:"Centro de Votacion",
        centros:null,
        ruta:{
          "type":"FeatureCollection",
          "features":[ {
            "type":"Feature",
            "properties":{"nombre":'ppa',"latitude":10.55555,"timestamp":0},                             
            "geometry":{"type":"LineString","coordinates":[[-66.8721358,10.4783499 ]] }
          }]
        },
        })
    const [zoom, setZoom] = useState([12]);
    const { latitude, longitude, timestamp, accuracy, error } = usePosition();
  //  const stategeo = useGeolocation();
   
  //console.log("stategeo"+JSON.stringify(state.positions))
  function onResize (map, event)  {
   //alert(map.getZoom()+" " +JSON.stringify(event))
  }
   function onZoom (map, event)  {
     var zoomint=Math.round(map.getZoom());
    //dispatch({
    //  type: 'ZOOM',
    //  stateprop:zoomint
    //});
            //setZoom([map.getZoom()])    
      //alert(zoomint+" "+event)
         
            setZoom(zoomint+(event)*1.1)
          }
      function onControlClick(map,event){
        var z=state.zoom
        z+=event
      //  dispatch({
      //    type: 'ZOOM',
      //    stateprop:z
      //  });
      }
    // console.log(props.positions.length+" possssssssssss ")
   // setCenter([stategeo.longitude,stategeo.latitude])
    let redpoint={
      "type":"FeatureCollection",
      "features":[{
        "type":"Feature",
        "properties":{"nombre":"red"},                             
        "geometry":{"type":"Point","coordinates":[state.position.longitude,state.position.latitude]
        }
      }]
    }
    let orangepoint={
      "type":"FeatureCollection",
      "features":[{
        "type":"Feature",
        "properties":{"nombre":"orange"},                             
        "geometry":{"type":"Point","coordinates":[longitude,latitude]
        }
      }]
    }
    let antenasjson={
    "type":"FeatureCollection",
    "features":[]
  }

  //coordendas de centride de parroquias
    
  const  featuresantenasjson=antenas.map(o=>{               
          return(
            {
              "type":"Feature",
              "properties":{"nombre":o.cellid},                             
              "geometry":{"type":"Point","coordinates":[o.lon,o.lat]
              }
            }
      )     
   })   
   antenasjson.features=featuresantenasjson;

  //const  featurescelularjson=celular.map((c,i)=>{
    var featurescelularjson=[]
   
   const  dronecoordinate=state.positions.map(p=>{               
    return(
      [p.longitude,p.latitude]
)     
})  

   let drone={
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "LineString",
          "coordinates": 
            dronecoordinate
           
          
        }
      }
    ]
  }
  //var coords=[]
  var centro=[state.position.longitude,state.position.latitude]
  //var centro=[ -80.23521423339844,25.791081498923305 ]
//  if (latitude>1){
//  centro=[longitude,latitude]
//  if (zoom<8)setZoom([50])  
//}
 //console.log(JSON.stringify(drone))
// var center = [  -66.8658,10.4645];
// var radius = 7;
 var options = {steps: 10, units: 'kilometers', properties: {foo: 'bar'}};
//  var circle10 = circle(centro, 10, options);
//  var circle9 = circle(centro, 9, options);
//  var circle8 = circle(centro, 8, options);
 
 
//  var circle1 = circle(centro, 7, options);
//  var circle2 = circle(centro, 6, options);
//  var circle3 = circle(centro, 5, options);
//  var circle4 = circle(centro, 4, options);
//  var circle5 = circle(centro, 3, options);
//  var circle6 = circle(centro, 2, options);
//  var circle7 = circle(centro, 1, options); 
console.log("zooooooooooooooooooooooooooooom"+state.zoom+"zooooooooooooooooooooooooooom")
return (
<Fragment>
<div className={classes.root}>
 <Title>Puntos de Venta</Title>   
<Map       
   //style="mapbox://styles/mapbox/streets-v8"
   style="mapbox://styles/mapbox/dark-v9"
   // style="mapbox://styles/mapbox/light-v9"
   //center={[-66.8726,10.4713]} 
   //center={[longitude,latitude]} 
   //zoom={[10]}
   center={[state.position.longitude,state.position.latitude]} 
   //center={[state.position.latitude,state.position.longitude]} 
    zoom={[zoom]}
   //onZoom={onZoom}
   onResize={onResize}
   containerStyle={mapStyle}        
   onControlClick={onControlClick}
//onClick={this._onClickMap}  
//<ZoomControl onControlClick={onControlClick}/>

> 
<ZoomControl onControlClick={onZoom}/>
<ScaleControl />
<GeoJSONLayer
          data={CIUDADESGEO}
          fillPaint={{'fill-color': 'darkgray','fill-outline-color': 'purple','fill-opacity': 0.1}}
          linePaint={{
            'line-color': 'darkgray',
            'line-width': .3
          }}
          
        />   
<GeoJSONLayer
          data={antenasjson}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': '#3BB9FF','circle-radius': 2,'circle-opacity': 0.6 }}         
          symbolLayout={{
            'text-field': '{nombre0}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'black'
          }}
          />
  

        <GeoJSONLayer
          data={drone}
          circlePaint={{'circle-color': 'yellow','circle-radius': 4,'circle-opacity': 0.6 }}   
          linePaint={{
            'line-color': 'lightyellow',
            'line-width': 2,
           'line-opacity': 0.6
          }}
          
        />   
         
<GeoJSONLayer
          data={redpoint}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'yellow','circle-radius': 14,'circle-opacity': 0.1 }}         
         
          />
 <GeoJSONLayer
          data={redpoint}
          circleLayout={{ visibility: 'visible' }}
         circlePaint={{'circle-color': 'red','circle-radius': 4, }}         
          symbolLayout={{
            'text-field': '{nombre0}',
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Bold'],
            'text-offset': [0, 0.6],
            'text-anchor': 'top',
            
          }}
          symbolPaint={{
            'text-color': 'black'
          }}
          />
         

</Map>


        </div>

</Fragment>
)
        }
