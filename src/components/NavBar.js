import React from "react";
import Hamburger from "./Hamburger";
import "../styles/navbar.sass";

export default function NavBar(props) {
    const toggle = () => props.toggleIsNavExpanded(!props.isNavExpanded)

    return (
        <nav
            role="navigation"
            aria-label="Navigation links"
            className={props.isNavExpanded ? "navbar" : "navbar mobile"}
        >
            <Hamburger
                isNavExpanded={props.isNavExpanded}
                toggleIsNavExpanded={props.toggleIsNavExpanded}
            />

            <div
                className={props.isNavExpanded ?
                    "links-container" :
                    "links-container mobile-hide"}
            >
                <a
                    onClick={toggle}
                    href="/#Top"
                    className="nav-home"
                    title="Home"
                >Home</a>

                <a
                    onClick={toggle}
                    href="/#Experience"
                    className="nav-experience"
                    title="Experience"
                >Experience</a>

                <a
                    onClick={toggle}
                    href="/#Projects"
                    className="nav-proj"
                    title="Projects"
                >Projects</a>

                <a
                    onClick={toggle}
                    href="/#Certifications"
                    className="nav-certs"
                    title="Certifications"
                >Certifications</a>

                <a
                    onClick={toggle}
                    href="/#Education"
                    className="nav-education"
                    title="Education"
                >Education</a>

                <a
                    onClick={toggle}
                    href="/#Contact"
                    className="nav-contact"
                    title="Contact"
                >Contact</a>
            </div>
        </nav>
    )
}

NavBar.defaultProps = {
    isNavExpanded: false
}
