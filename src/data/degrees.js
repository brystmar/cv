import React from "react";

const TCU = {
    degreeType:       "Bachelor of Business Administration",
    degreeTypeAbbrev: "B.B.A.",
    degreeName:       "Management Information Systems",
    issuer:           "TCU",
    logo:             <img
                          src="./logos/tcu.svg"
                          alt="Logo of Texas Christian University (TCU)"
                          title="TCU logo"
                          className="logo degree-logo"
                      />,
    url:              "https://www.tcu.edu",
    location:         "Fort Worth, TX",
    date:             "May 2007"
};

const myDegrees = [ TCU ];

export default myDegrees;
