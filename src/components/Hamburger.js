import React, {useState} from "react";
import "../styles/hamburger.sass";

function Hamburger() {
    const [isOpen, updateIsOpen] = useState(false)

    return <button type="button"
                   name="nav-hamburger"
                   onClick={() => updateIsOpen(!isOpen)}
                   title={isOpen ? "Close" : "Menu"}
                   className={isOpen ? "nav-hamburger open" : "nav-hamburger"}
                   aria-label={isOpen ? "Close navigation" : "Open navigation"}>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"> </span>
        <span aria-hidden="true"> </span>
    </button>
}

export default Hamburger;
