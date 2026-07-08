const breadsheet = {
    name:        "Breadsheet",
    description: "Scheduling tool that helps you fit long recipes into your day.",
    url:         "https://www.breadsheet.com",
    repo:        "https://github.com/brystmar/breadsheet-ui",
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/breadsheet.png"
                     alt="Using the breadsheet scheduling tool for a sourdough recipe"
                     // title="Visit breadsheet.com"
                     className="screenshot wide"
                 />,
    notes:       [
        "Bread recipes are often all-day affairs with hours of downtime between steps.  And some, like sourdough, require multi-day planning.",
        "Specify when you plan to start a recipe and breadsheet displays a step-by-step timeline.  Bakers can easily customize the amount of downtime between steps, making it easy to fit baking steps into your day.",
        "The reverse is also true: Enter the date & time you want the finished product ready, and breadsheet works backwards to deliver a schedule that meets your deadline."
    ],
    tech:        [
        {
            type:  "Frontend",
            items: [
                "React", "SASS", "JavaScript"
            ]
        },
        {
            type:  "Backend",
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

const greetingCards = {
    name:        "Greeting Cards",
    description: "Locally hosted app to simplify household & address management for your annual holiday card.",
    url:         "https://en.wikipedia.org/wiki/Self-hosting_(network)",
    repo:        "https://github.com/brystmar/greeting-cards-ui",
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/greetingcards.png"
                     alt="An example of the Greeting Cards app showing a list of households with an example record selected."
                     className="screenshot wide"
                 />,
    notes:       [
        "Simple app to manage a personal database of households, addresses, and events, plus the cards mailed for each.",
        "Track the thank-you cards sent for gifts received at an event. Think weddings, baby showers, birthdays.",
        "In practice, it's mostly used to organize households & addresses for our annual Christmas card."
    ],
    tech:        [
        {
            type:  "Frontend",
            items: [
                "React", "SASS", "JavaScript"
            ]
        },
        {
            type:  "Backend",
            items: [
                "Python", "Flask"
            ]
        },
        {
            type:  "Infrastructure",
            items: [
                "Postgres", "Portainer"
            ]
        }
    ]
}

const cv = {
    name:        "Thomas Berg's CV",
    description: "The website you're reading right now.  So meta.",
    url:         "https://thomasberg.me",
    repo:        "https://github.com/brystmar/cv",
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/cv.png"
                     alt="Top section of the website you're reading right now"
                     // title="The website you're currently reading. So meta."
                     className="screenshot wide"
                 />,
    notes:       [
        "This online CV is a simple React app without a backend, hosted in a Google Cloud Storage bucket.",
        "Modular design parses content from static .js files.",
        "Canvas for showcasing my progress as I explore the world of front-end development."
    ],
    tech:        [
        {
            type:  "Frontend",
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


const homelab = {
    name:        "Homelab",
    description: "Production-grade home automation platform built on open-source software with a local-first approach.",
    url:         "https://en.wikipedia.org/wiki/Self-hosting_(network)",
    repo:        null,
    screenshot:  <img
                     src="https://storage.googleapis.com/tb-public-misc/projects/cv/screenshots/homelab.jpg"
                     alt="A 12U server rack mounted to the wall of a utility closet showing networking & server hardware with neatly organized wiring."
                     className="screenshot wide"
                 />,
    notes:       [
        "What to do when you own a 1910 house and want to run a full UniFi stack? You buy three 500' rolls of CAT-6 and start running cable.",
        "Includes a mature Home Assistant deployment, running bare metal on a dedicated NUC. Strict style guidelines ensure scalability, organizing thousands of entities from ~400 devices across dozens of integrations, controlled by >100 automations and dozens of scripts. All in service of an intuitive UX that my wife uses daily and considers essential.",
        "DIY TrueNAS build follows best practices, implementing a least-privilege ACL model to replace an enshittified Synology DS-1019+.",
        "Automated weekly backups for all services, virtualized environments, and hardware configs. UPS integration ensures high(ish) availability, with multiple levels of prioritized load shedding during outages. Full documentation for all hardware, services, and integrations, including disaster recovery."
    ],
    tech:        [
        {
            type:  "Infrastructure",
            items: [
                "Proxmox", "Portainer", "Nginx", "TrueNAS", "UniFi", "ZFS"
            ]
        },
        {
            type:  "Automation & IoT",
            items: [
                "Home Assistant", "ESPHome", "HomeKit", "Matter", "Z-Wave", "Zigbee"
            ]
        }
    ]
}

const myProjects = [ homelab, greetingCards, breadsheet ];

export default myProjects;
