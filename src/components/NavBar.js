import React from "react";
import Hamburger from "./Hamburger";
import "../styles/navbar.sass";

function NavBar(props) {
    const toggle = () => props.toggleIsNavExpanded(!props.isNavExpanded)

    return (
        <nav role="navigation"
             aria-label="Links to various sections"
             className="navbar">

            <Hamburger isNavExpanded={props.isNavExpanded}
                       toggleIsNavExpanded={props.toggleIsNavExpanded}/>

            {props.isNavExpanded ?
                <span className="links-container">
                    <ul>
                        <li><a href="/#Top" onClick={toggle}>Home</a></li>
                        <li><a href="/#Experience" onClick={toggle}>Experience</a></li>
                        <li><a href="/#Projects" onClick={toggle}>Projects</a></li>
                        <li><a href="/#Certifications" onClick={toggle}>Certifications</a></li>
                        <li><a href="/#Contact" onClick={toggle}>Contact</a></li>
                    </ul>
                </span> : ""
            }
        </nav>
    )
}

NavBar.defaultProps = {
    isNavExpanded: false
}

export default NavBar;
