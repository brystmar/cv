import React from "react";
import Cert from "./Cert";
import myCerts from "../data/certifications";

function Certifications() {
    const certsList = myCerts.map((cert, index) =>
        <Cert key={index}
              name={cert.name}
              issuer={cert.issuer}
              logo={cert.logo}
              url={cert.url}
              date={cert.date}/>)

    return (
        <section
            id="Certifications"
            aria-label="Certifications attained"
            className="cert-container">

            <h1>Certifications</h1>
            {certsList}
        </section>
    )
}

export default Certifications;