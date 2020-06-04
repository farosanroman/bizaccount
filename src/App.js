import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

import Login from '../src/components/login'
import Dashboard from '../src/components/dashboard'
function App() {
  const [pag, setPag] = useState(0);
  const onLoginClick = () => {  
     // alert("onLoginClick")
      setPag(1)
  }  
  return (
    <div className="App">
      {(pag==0)&&<Login loginclick={onLoginClick}/>} 
      {(pag==1)&&<Dashboard/>} 
    </div>
  );
}

export default App;
//https://codepen.io/kelvinzhang/pen/jpoRMm?editors=1010
//https://codepen.io/ivjose/pen/EyjGKa   TARJETA 
//https://medium.com/@reginald.johnson
//https://medium.com/hackernoon/accepting-payments-in-a-react-native-app-part-1-9cb09a271f59
//https://medium.com/react-native-training/accepting-payments-in-a-react-native-app-part-3-c22828ecab13
