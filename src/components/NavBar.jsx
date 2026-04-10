import React from "react";
import Hamburger from "./Hamburger";
import "../styles/navbar.sass";

export default function NavBar(props) {
    function closeNavIfExpanded() {
        if (props.isNavExpanded) {
            props.toggleIsNavExpanded(false)
        }
    }

    return (
        <nav
            role="navigation"
            aria-label="Navigation links"
            className={"navbar".concat(props.isNavExpanded ? " nav-expanded" : "")}
        >
            <Hamburger
                isNavExpanded={props.isNavExpanded}
                toggleIsNavExpanded={props.toggleIsNavExpanded}
            />

            <div className={"links-container".concat(props.isNavExpanded ? "" : " mobile-hidden")}>
                <a
                    onClick={closeNavIfExpanded}
                    href="/#Home"
                    className="nav-home"
                    title="Home"
                >Home</a>

                <a
                    onClick={closeNavIfExpanded}
                    href="/#Experience"
                    className="nav-experience"
                    title="Experience"
                >Experience</a>

                <a
                    onClick={closeNavIfExpanded}
                    href="/#Projects"
                    className="nav-proj"
                    title="Projects"
                >Projects</a>

                <a
                    onClick={closeNavIfExpanded}
                    href="/#Certifications"
                    className="nav-certs"
                    title="Certifications"
                >Certifications</a>

                <a
                    onClick={closeNavIfExpanded}
                    href="/#Education"
                    className="nav-education"
                    title="Education"
                >Education</a>

                <a
                    onClick={closeNavIfExpanded}
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
