import React from "react";
import Hamburger from "./Hamburger";
import "../styles/navbar.sass";

function NavBar(props) {
    const toggle = () => props.toggleIsNavExpanded(!props.isNavExpanded)

    return (
        <nav role="navigation"
             aria-label="Navigation links"
             className={props.isNavExpanded ? "navbar" : "navbar mobile"}>

            <Hamburger isNavExpanded={props.isNavExpanded}
                       toggleIsNavExpanded={props.toggleIsNavExpanded}/>

            <div className={props.isNavExpanded ?
                "links-container" :
                "links-container mobile-hide"}>
                <a href="/#Top" onClick={toggle}>Home</a>
                <a href="/#Experience" onClick={toggle}>Experience</a>
                <a href="/#Projects" onClick={toggle}>Projects</a>
                <a href="/#Certifications" onClick={toggle}>Certifications</a>
                <a href="/#Education" onClick={toggle}>Education</a>
                <a href="/#Contact" onClick={toggle}>Contact</a>
            </div>
        </nav>
    )
}

NavBar.defaultProps = {
    isNavExpanded: false
}

export default NavBar;