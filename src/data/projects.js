import React from "react";

const breadsheet = {
    name: "Breadsheet",
    description: "Scheduling tool for homemade bread and pizza",
    url: "http://www.breadsheet.com",
    repo: "https://github.com/brystmar/breadsheet-ui",
    screenshot: <img src="https://storage.googleapis.com/tb-public-misc/screenshots/breadsheet.png"
                     alt="Example of using the breadsheet.com scheduling tool for a sourdough recipe"
                     className="screenshot"/>,
    notes: [
        "Breadsheet is a handy scheduling tool that helps you fit long recipes into your day.",
        "Many bread recipes are all-day affairs with hours of downtime between steps.  And some, like sourdough, require multi-day planning.",
        "Once added to breadsheet, home cooks specify when they plan to start a recipe.  The tool delivers a clear picture of the finish line -- and each step along the way.",
        "The reverse is also true: enter the date & time you want the finished product ready, and breadsheet works backwards to deliver a schedule meeting this deadline."
    ],
    tech: [
        {
            type: "Front End",
            items: [
                "React", "SASS", "JavaScript"
            ]
        },
        {
            type: "Infrastructure",
            items: [
                "AWS DynamoDB", "Google App Engine", "Google Cloud Storage"
            ]
        },
        {
            type: "Back End",
            items: [
                "Python", "Flask"
            ]
        }
    ]
}

const cellarSync = {
    name: "Cellar Sync",
    description: "Inventory management app for cellars of beer, wine, and mead.",
    url: "http://cellarsync.com",
    repo: "https://github.com/brystmar/cellar-sync-ui",
    screenshot: <img src="https://storage.googleapis.com/tb-public-misc/screenshots/cellarsync.png"
                     alt="Screenshot of the Cellar Sync webapp"
                     className="screenshot"/>,
    notes: [
        "Currently undergoing a significant refactor to simplify the data structure.",
        "Placeholder for more info about this project."
    ],
    tech: [
        {
            type: "Front End",
            items: [
                "React", "SASS"
            ]
        },
        {
            type: "Infrastructure",
            items: [
                "AWS DynamoDB", "Google App Engine", "Google Cloud Storage"
            ]
        },
        {
            type: "Back End",
            items: [
                "Python", "Flask"
            ]
        }
    ]
}

const cv = {
    name: "Thomas Berg's CV",
    description: "The website you're reading right now.  So meta.",
    url: "http://thomasberg.me",
    repo: "https://github.com/brystmar/cv",
    screenshot: <img src="https://storage.googleapis.com/tb-public-misc/screenshots/cv.png"
                     alt="Screenshot of the website you're reading right now"
                     className="screenshot"/>,
    notes: [
        "A simple React app without a backend, hosted in a Google Cloud Storage bucket.",
        "Content from static .js files."
    ],
    tech: [
        {
            type: "Front End",
            items: [
                "React", "SASS"
            ]
        },
        {
            type: "Infrastructure",
            items: [
                "Google Cloud Storage"
            ]
        }
    ]
}

const myProjects = [breadsheet, cellarSync, cv];

export default myProjects;