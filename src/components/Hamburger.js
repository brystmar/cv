import React from "react";
import PropTypes from "prop-types";
import "../styles/hamburger.sass";

export default function Hamburger(props) {
    return (
        <button
            type="button"
            name="nav-hamburger"
            onClick={() => props.toggleIsNavExpanded(!props.isNavExpanded)}
            title={props.isNavExpanded ? "Close navigation" : "Expand navigation"}
            className={props.isNavExpanded ? "nav-hamburger open" : "nav-hamburger"}
            aria-label={props.isNavExpanded ? "Close navigation" : "Expand navigation"}
        >
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
        </button>
    )
}

Hamburger.defaultProps = {
    isNavExpanded: false
}

Hamburger.propTypes = {
    isNavExpanded: PropTypes.bool.isRequired
}
