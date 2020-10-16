import React from "react";
import Cert from "./Cert";
import myDegrees from "../data/education";

function Education() {
    const degrees = myDegrees.map((degree, index) =>
        <Cert key={index}
              name={degree.name}
              authority={degree.school}
              url={degree.url}
              date={degree.date}/>)

    return (
        <section
            id="Education"
            aria-label="Educational degrees attained"
            className="education-container">

            <h1>Education</h1>
            {degrees}

        </section>
    )
}

export default Education;