import React from "react";
import Cert from "./Cert";
import myCerts from "../data/certifications";

function Certifications() {
    const certs = myCerts.map((cert, index) =>
        <Cert key={index}
              name={cert.name}
              authority={cert.authority}
              url={cert.url}
              date={cert.date}
              number={cert.number}/>)

    return (
        <section
            id="Certifications"
            aria-label="Certifications attained"
            className="certs-container">

            <h1>Certifications</h1>
            {certs}

        </section>
    )
}

export default Certifications;