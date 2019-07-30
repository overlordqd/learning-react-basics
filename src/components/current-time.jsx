import React from "react";
import PropTypes from "prop-types";
import { Header } from "./header";

export default class CurrentTime extends React.Component {
  constructor(props) {
    const initialColor = props.color || "#333";
    super(props);
    this.state = {
      currentTime: new Date(),
      color: initialColor,
      colorText: initialColor
    };
  }
  handleChangeColor = color => {
    this.setState(
      {
        color
      },
      () => this.props.ColorChanged && this.props.ColorChanged(this.state.color)
    );
  };
  paintRed() {
    this.handleChangeColor("red");
  }
  handleChange(event) {
    this.setState({ colorText: event.target.value });
  }
  handleKeyUp(event) {
    if (event.keyCode === 13) this.handleChangeColor(this.state.colorText);
  }
  render() {
    return (
      <div>
        <Header title="Current Time" />

        <div className="input-group mb-3 col-md-6 p-0 mt-4">
          <div className="input-group-prepend">
            <span className="input-group-text">Input a color and hit Enter</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Color"
            aria-label="Color"
            aria-describedby="button-color"
            onChange={event => this.handleChange(event)}
            onKeyUp={event => this.handleKeyUp(event)}
            value={this.state.colorText}
          />
          <div className="input-group-append">
          <button
          className="btn btn-primary btn-sm"
          {...this.state.color === "red" && { disabled: "disabled" }}
          onClick={() => this.paintRed()}
        >
          paint this red
        </button>
          </div>
        </div>

        <h1 className="col-md-6 p-0" >
          <span
            style={{ backgroundColor: this.state.color }}
            className="badge badge-secondary"
          >
            {this.state.currentTime.toLocaleTimeString()}
          </span>
        </h1>
      </div>
    );
  }
  updateTime() {
    this.setState({ currentTime: new Date() });
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

CurrentTime.propTypes = {
  ColorChanged: PropTypes.func
};
