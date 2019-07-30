import React from "react";
import { Header } from "./header";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = { persons: [] };
  }
  render() {
    return (
      <div>
        <Header title="Overview" />
        <div className="overview col-md-8 offset-md-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.state.persons.map(person => (
                <tr key={person.id}>
                  <th scope="row">{person.id}</th>
                  <td>{person.name}</td>
                  <td className="action">
                    <Link to={`persons/${person.id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(`https://5d3b0c21552bfb00148e007a.mockapi.io/products`)
      .then(rp => {
        this.setState({ persons: rp.data });
      });
  }
}
