import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Login from './Login';
import Preferences from './Preferences';
import useToken from './useToken';
import Home from './Home'
import QuoteContainer from './QuoteContainer'



function App(){



  

  
  const { token, setToken } = useToken()

  if(!token) {
    return <Login setToken={setToken} />
  }
  

  

  return (
    <div className="wrapper">
  
    
      <h1><QuoteContainer /> </h1>
    
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
       
            
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
      <Dashboard />
    </div>
  );
}
export default App;