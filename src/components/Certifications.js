import React from "react";
import Cert from "./Cert";
import myCerts from "../data/certifications";

export default function Certifications() {
    return (
        <section
            id="Certifications"
            aria-label="Certifications attained"
            className="certification-section"
        >
            <h1>Certifications</h1>
            <div className="certs-container">
                {myCerts.map((cert, index) =>
                    <Cert
                        key={index}
                        name={cert.name}
                        issuer={cert.issuer}
                        logo={cert.logo}
                        url={cert.url}
                        date={cert.date}
                    />
                )}
            </div>
        </section>
    )
}
