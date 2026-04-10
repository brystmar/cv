import React from "react";

const breadsheet = {
    name:        "Breadsheet",
    description: "Scheduling tool that helps you fit long recipes into your day.",
    url:         "http://www.breadsheet.com",
    repo:        "https://github.com/brystmar/breadsheet-ui",
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/breadsheet.png"
                     alt="Using the breadsheet scheduling tool for a sourdough recipe"
                     title="Visit breadsheet.com"
                     className="screenshot wide"
                 />,
    notes:       [
        "Bread recipes are often all-day affairs with hours of downtime between steps.  And some, like sourdough, require multi-day planning.",
        "Specify when you plan to start a recipe and breadsheet displays a step-by-step timeline.  Bakers can easily customize the amount of downtime between steps, making it easy to fit baking steps into your day.",
        "The reverse is also true: Enter the date & time you want the finished product ready, and breadsheet works backwards to deliver a schedule that meets your deadline."
    ],
    tech:        [
        {
            type:  "Front End",
            items: [
                "React", "SASS", "JavaScript"
            ]
        },
        {
            type:  "Back End",
            items: [
                "Python", "Flask"
            ]
        },
        {
            type:  "Infrastructure",
            items: [
                "AWS DynamoDB", "Google App Engine", "Google Cloud Storage"
            ]
        }
    ]
}

// const cellarSync = {
//     name:        "Cellar Sync",
//     description: "Inventory management app for cellars of beer, wine, and mead.",
//     url:         "http://cellarsync.com",
//     repo:        "https://github.com/brystmar/cellar-sync-ui",
//     screenshot:  <img
//                      src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/cellarsync.png"
//                      alt="Cellar Sync webapp"
//                      title="Visit cellarsync.com"
//                      className="screenshot tall"
//                  />,
//     status:      "Major refactor in progress",
//     notes:       [
//         "Many delicious beverages improve with age, and it's hard to keep track of everything yourself.",
//         "Cellar Sync tracks your inventory, helps identify when bottles are at their peak, and displays an elegant bottle menu for your dinner parties.",
//         "App will (eventually) leverage the Untappd API to automatically remove bottles from your cellar after you drink them."
//     ],
//     tech:        [
//         {
//             type:  "Front End",
//             items: [
//                 "React", "SASS"
//             ]
//         },
//         {
//             type:  "Back End",
//             items: [
//                 "Python", "Flask"
//             ]
//         },
//         {
//             type:  "Infrastructure",
//             items: [
//                 "AWS DynamoDB", "Google App Engine", "Google Cloud Storage"
//             ]
//         }
//     ]
// }

const cv = {
    name:        "Thomas Berg's CV",
    description: "The website you're reading right now.  So meta.",
    url:         "http://thomasberg.me",
    repo:        "https://github.com/brystmar/cv",
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/cv.png"
                     alt="Top section of the website you're reading right now"
                     title="The website you're currently reading. So meta."
                     className="screenshot tall"
                 />,
    notes:       [
        "This online CV is a simple React app without a backend, hosted in a Google Cloud Storage bucket.",
        "Modular design parses content from static .js files.",
        "Canvas for showcasing my progress as I explore the world of front-end development."
    ],
    tech:        [
        {
            type:  "Front End",
            items: [
                "React", "SASS", "JavaScript"
            ]
        },
        {
            type:  "Infrastructure",
            items: [
                "Google Cloud Storage"
            ]
        }
    ]
}

const myProjects = [ breadsheet, cv ];

export default myProjects;
