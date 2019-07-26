import React from 'react';
import { Clock } from './clock'

export default class Root extends React.Component {
  state = { color: "black" };
  onColorChange(color){
    this.setState({ color })
  }
  render(){
    return (
    <div className="App">
        {this.props.children}
        <hr/>
        <Clock clockTick={this.onColorChange.bind(this)}>
        </Clock>
    </div>)
  }
}