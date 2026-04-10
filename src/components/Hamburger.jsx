import React from "react";
import PropTypes from "prop-types";
import "../styles/hamburger.sass";

export default function Hamburger({ isNavExpanded = false, toggleIsNavExpanded }) {
    return (
        <button
            type="button"
            name="nav-hamburger"
            onClick={() => toggleIsNavExpanded(!isNavExpanded)}
            title={isNavExpanded ? "Close navigation" : "Expand navigation"}
            className={isNavExpanded ? "nav-hamburger open" : "nav-hamburger"}
            aria-label={isNavExpanded ? "Close navigation" : "Expand navigation"}
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </button>
    )
}

Hamburger.propTypes = {
    isNavExpanded: PropTypes.bool.isRequired
}
