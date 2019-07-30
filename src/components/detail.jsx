import React from "react";
import axios from "axios";
import { Header } from "./header";

export default class Detail extends React.Component {
  state = {
    personId: this.props.match.params.id,
    person: null
  };
  render() {
    return ( 
      <div>
        <Header title="Details" />
        {this.state.person ? (
        <div className="col-md-2 offset-md-5">
          <div className="card">
            <div className="card-title">{this.state.person.name}</div>
            <img
              className="card-img-top"
              src={this.state.person.image}
              alt="Card cap"
            />
            <div className="card-body">
              <p className="card-text">{this.state.person.description}</p>
              <p className="card-text">{this.formatDate(this.state.person.createdAt)}</p>
              <button
            className="btn btn-primary btn-sm"
            onClick={() => this.props.history.goBack()}
          >
            Back
          </button>
            </div>
          </div>
        </div>) : ""}
      </div>
    );
  }
  formatDate = (date) => {
    
    return new Date(date).toLocaleString();
  }
  componentDidMount() {
    axios
      .get(
        `https://5d3b0c21552bfb00148e007a.mockapi.io/products/${
          this.state.personId
        }`
      )
      .then(rp => {
        this.setState({ person: rp.data });
      });
  }
}
