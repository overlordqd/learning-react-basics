import React from 'react'
import PropTypes from 'prop-types';

export class Clock extends React.Component {    
    constructor(props) {
        const initialColor = props.color || "white"
        super(props);
        this.state = {
            currentTime: new Date(),
            color: initialColor,
            colorText: initialColor,
        }
    }
    changeColor = (color) => {
        this.setState({
            color
        }, () => this.props.clockTick(this.state.color));
    }
    paintRed() {
        this.changeColor("red");
    }
    handleChange(event) {
        this.setState({ colorText: event.target.value })
    }
    handleKeyUp(event) {
        if(event.keyCode === 13)
            this.changeColor(this.state.colorText);
    }
    render() {
        return (
            <div>
                <button 
                    {...(this.state.color === "red" && {disabled : "disabled"})}
                    onClick={() => this.paintRed()}
                    style={{ backgroundColor: "red", color: "white"}}>paint this red</button>
                <h1 style={{ backgroundColor: this.state.color }} >
                    {this.state.currentTime.toLocaleTimeString()}
                </h1>
                <p>{this.props.children}</p>
                <input type="text"
                    onChange={(event) => this.handleChange(event)}
                    onKeyUp={(event) => this.handleKeyUp(event)}
                    value={this.state.colorText}></input>
            </div>)
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({ currentTime: new Date() })
        }, 1000);
    }
}

Clock.propTypes = {
    clockTick: PropTypes.func
};