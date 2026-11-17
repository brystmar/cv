import React from "react";
import Hamburger from "./Hamburger";
import "../styles/navbar.sass";

export default function NavBar({ isNavExpanded = false, toggleIsNavExpanded }) {
    function closeNavIfExpanded() {
        if (isNavExpanded) {
            toggleIsNavExpanded(false)
        }
    }

    return (
        <nav
            role="navigation"
            aria-label="Navigation links"
            className={"navbar".concat(isNavExpanded ? " nav-expanded" : "")}
        >
            <Hamburger
                isNavExpanded={isNavExpanded}
                toggleIsNavExpanded={toggleIsNavExpanded}
            />

            <div className={"links-container".concat(isNavExpanded ? "" : " mobile-hidden")}>
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
