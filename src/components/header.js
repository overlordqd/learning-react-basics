import React from 'react'
import PropTypes from 'prop-types';

export const Header = (props) => {
    return (
    <nav className="header jumbotron text-center">
        <h1 style={{color: props.color}}>
            {props.title}
        </h1>
    </nav>)
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string
};