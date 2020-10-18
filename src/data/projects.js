import React from "react";

const breadsheet = {
    name: "Breadsheet",
    description: "Scheduling tool for homemade bread and pizza",
    url: "http://www.breadsheet.com",
    screenshot: <img src="https://storage.googleapis.com/tb-public-misc/breadsheet-screenshot.png"
                     alt="Example of using the breadsheet scheduling tool for a sourdough recipe"
                     className="screenshot"/>,
    tech: [
        {
            type: "Back End",
            items: [
                "Python", "Flask"
            ]
        },
        {
            type: "Infrastructure",
            items: [
                "Google App Engine", "AWS DynamoDB", "Google Cloud Storage"
            ]
        },
        {
            type: "Front End",
            items: [
                "React", "CSS (SASS)", "JavaScript", "Figma"
            ]
        }
    ]
}

const myProjects = [breadsheet];

export default myProjects;