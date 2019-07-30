import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Root from './components/root';
import Detail from './components/detail';
import Overview from './components/overview';
import CurrentTime from './components/current-time';

export default class App extends React.Component {
  render(){
    return (
   <Router>
     <Root>        
        <Route path={"/current-time"} component={CurrentTime}></Route>
        <Switch>
          <Route path={"/persons/:id"} component={Detail}></Route>
          <Route exact path={"/persons"} component={Overview}></Route>
          <Route exact path={"/"}>
            <Redirect to={"/persons"}></Redirect>
          </Route>        
        </Switch>        
     </Root>
   </Router>
    )
  }
}