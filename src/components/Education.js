import React from "react";
import Degree from "./Degree";
import myDegrees from "../data/degrees";

function Education() {
    const degreesList = myDegrees.map((degree, index) =>
        <Degree key={index}
                degreeType={degree.degreeType}
                degreeTypeAbbrev={degree.degreeTypeAbbrev}
                degreeName={degree.degreeName}
                issuer={degree.issuer}
                logo={degree.logo}
                url={degree.url}
                location={degree.location}
                date={degree.date}/>)

    return (
        <section
            id="Education"
            aria-label="Educational degrees attained"
            className="education-container">

            <h1>Education</h1>
            {degreesList}

        </section>
    )
}

export default Education;