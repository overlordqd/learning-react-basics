import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Root from './components/root';
import Detail from './components/detail';
import Overview from './components/overview';

export default class App extends React.Component {
  render(){
    return (
   <Router>
     <Root>
      <Route exact path={"/"} component={Overview}></Route>
      <Route path={"/detail/:id"} component={Detail}></Route>
     </Root>
   </Router>
    )
  }
}