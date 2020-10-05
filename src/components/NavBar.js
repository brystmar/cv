import React from "react";

function NavBar(props) {
    return <nav role="navigation" aria-label="Links to various sections">
        <ul>
            <li><a href="/#Top">Home</a></li>
            <li><a href="/#Experience">Experience</a></li>
            <li><a href="/#Projects">Projects</a></li>
            <li><a href="/#Certifications">Certifications</a></li>
            <li><a href="/#Contact">Contact</a></li>
        </ul>
    </nav>
}

export default NavBar;
