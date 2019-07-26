import React from 'react';
import axios from 'axios'
import { Header } from './header';

export default class Detail extends React.Component {  
  state = {
    personId: this.props.match.params.id,
    person: {}
  }
  render(){
    return (
      <div>
        <Header title="Details"></Header>
        <div class="card" style={{width: "18rem"}}>
          <div className="card-title">{this.state.person.name}</div>
          <img class="card-img-top" src={this.state.person.image} alt="Card cap" ></img>
          <div class="card-body">
            <p class="card-text">{this.state.person.description}</p>
            <p class="card-text">{this.state.person.createdAt}</p>
          </div>
        </div>
      </div>
   )
  }
  componentDidMount(){
    axios.get(`https://5d3b0c21552bfb00148e007a.mockapi.io/products/${this.state.personId}`)
    .then(rp => {
        this.setState({person: rp.data});
    })
  }
}