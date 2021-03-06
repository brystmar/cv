import React from "react";
import Degree from "./Degree";
import myDegrees from "../data/degrees";

export default function Education() {
    return (
        <section
            id="Education"
            aria-label="Educational degrees attained"
            className="education-section"
        >
            <h1>Education</h1>
            {myDegrees.map((degree, index) =>
                <Degree
                    key={index}
                    degreeType={degree.degreeType}
                    degreeTypeAbbrev={degree.degreeTypeAbbrev}
                    degreeName={degree.degreeName}
                    issuer={degree.issuer}
                    logo={degree.logo}
                    url={degree.url}
                    location={degree.location}
                    date={degree.date}
                />
            )}
        </section>
    )
}
