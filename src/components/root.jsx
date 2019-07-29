import React from 'react';

export default class Root extends React.Component {
  render(){
    return (
    <div className="App container-fluid">
        {this.props.children}
    </div>)
  }
}