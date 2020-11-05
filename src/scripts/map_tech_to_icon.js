import React from "react";

function map_tech_to_icon(tech) {
    if (typeof tech !== "string") {
        return `Function only accepts strings, not ${typeof tech}.`
    }

    switch (tech) {
        case "Python":
            return <img src="./logos/python.svg"
                        alt="Logo for the Python programming language"
                        className="logo"/>

        case "Flask":
            return <img src="./logos/flask.svg"
                        alt="Flask logo"
                        className="logo"/>

        case "AWS DynamoDB":
            return <img src="./logos/aws-dynamodb.png"
                        alt="AWS DynamoDB logo"
                        className="logo"/>

        case "Google App Engine":
            return <img src="./logos/gcp-app-engine.png"
                        alt="Google App Engine logo"
                        className="logo"/>

        case "Google Cloud Storage":
            return <img src="./logos/gcp-storage.png"
                        alt="Google Cloud Storage logo"
                        className="logo"/>

        case "React":
            return <img src="./logos/react.svg"
                        alt="React logo"
                        className="logo"/>

        case "SASS":
            return <img src="./logos/sass.svg"
                        alt="Logo for SASS, a CSS pre-compiler"
                        className="logo"/>

        case "JavaScript":
            return <img src="./logos/javascript.svg"
                        alt="Logo for the JavaScript programming language"
                        className="logo"/>
        default:
            return "Logo not found"
    }
}

export default map_tech_to_icon;