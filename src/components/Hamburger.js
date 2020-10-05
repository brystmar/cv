import React from "react";
import "../styles/hamburger.sass";

function Hamburger(props) {
    return (
        <button type="button"
                name="nav-hamburger"
                onClick={() => props.toggleIsNavExpanded(!props.isNavExpanded)}
                title={props.isNavExpanded ? "Close" : "Menu"}
                className={props.isNavExpanded ? "nav-hamburger open" : "nav-hamburger"}
                aria-label={props.isNavExpanded ? "Close navigation" : "Open navigation"}>
            <span aria-hidden="true"> </span>
            <span aria-hidden="true"> </span>
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

export default Hamburger;