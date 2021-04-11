import React from "react";

const expediaPM = {
    companyName:     "Expedia Group",
    url:             "https://www.expediagroup.com/",
    logo:            <img
                         src="./logos/expedia-group.svg"
                         alt="Expedia Group corporate logo"
                         className="logo job-logo"
                     />,
    location:        "Seattle, WA",
    title:           "Product Manager III",
    startDate:       "Feb 2020",
    endDate:         "Present",
    accomplishments: [
        "Deployed live agent chat w/integrated chatbot as a new, lower-cost service channel for >23,000 B2B clients across 19 countries.",
        "Availability of live chat deflects 11% of support requests from higher-cost service channels.  More in-depth metrics coming soon.",
        "Enabled a location-agnostic staffing model by adding real-time translation and skills-based routing.",
        "Designed, implemented, and migrated 3000 travel agents to a custom Salesforce Service Cloud solution, enabling ops leadership to measure productivity of support teams."
    ]
};

const dynataSeniorPdM = {
    companyName:     "Dynata",
    url:             "https://www.dynata.com/",
    logo:            <img
                         src="./logos/dynata.png"
                         alt="Dynata corporate logo"
                         className="logo job-logo"
                     />,
    location:        "Seattle, WA",
    title:           "Senior Product Manager",
    subtitle:        "Platform Systems",
    startDate:       "Apr 2019",
    endDate:         "Feb 2020",
    accomplishments: [
        "Led integration efforts through 2019, supporting two M&A events which doubled the company’s size.  Combined platform handles >$800MM (USD) annually.",
        "Architected a new, cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and internal microservices.",
        "Spearheaded the adoption of a unified design platform to standardize UI/UX across systems."
    ]
};

const dynataPdM = {
    companyName:     "Dynata",
    url:             "https://www.dynata.com/",
    logo:            <img
                         src="./logos/dynata.png"
                         alt="Dynata corporate logo"
                         className="logo job-logo"
                     />,
    location:        "Plano, TX and Seattle, WA",
    title:           "Product Manager",
    subtitle:        "Platform Systems",
    startDate:       "Jul 2015",
    endDate:         "Mar 2019",
    accomplishments: [
        "Slashed median quote-prep time from 44 to 14 minutes (68%) in the first year by optimizing workflow and applying UX fundamentals.",
        "Developed a web-based CPQ (configure/price/quote) UI to integrate with our inventory forecasting service.  Managed from concept through storyboards, release, and adoption.",
        "This new UI further reduced median quote-prep time to 3½ minutes – down 92% overall."
    ]
};

const dynataPjM = {
    companyName:     "Dynata",
    url:             "https://www.dynata.com/",
    logo:            <img
                         src="./logos/dynata.png"
                         alt="Dynata corporate logo"
                         className="logo job-logo"
                     />,
    location:        "Plano, TX",
    title:           "Project Manager",
    startDate:       "May 2013",
    endDate:         "Jun 2015",
    accomplishments: [
        "Coordinated customers and stakeholders to deliver insightful market research.",
        "Recognized as global SME in Oct 2013, then commissioned as a cross-regional consultant to drive efficiency metrics.",
        "Championed process re-engineering and user training on-site in London and EMEA satellite offices, boosting regional conversion by 43% in 13 weeks.  Developed tools to measure and sustain these improvements."
    ]
};

const pokerPlayer = {
    companyName:     "Self Employed",
    url:             "https://www.wikihow.com/Become-a-Professional-Poker-Player",
    logo:            <span className="logo job-logo poker-logos" />,
    location:        "Chicago, Vegas, Austin, NYC",
    title:           "Professional Poker Player \nand Coach",
    startDate:       "May 2007",
    endDate:         "Dec 2012",
    accomplishments: [
        "Learned to remain objective and make data-driven decisions under pressure.",
        "Specialized in online short-handed cash games of No-Limit Hold'em and Pot-Limit Omaha.",
        "Typically played 6 to 8 concurrent tables, with >2 million total hands played lifetime.",
        "Won the $216 Full Tilt Sunday Tournament in Nov 2008, besting 3600 other players for a six-figure prize.",
        "Private coach to more than a dozen students worldwide, from Modesto to Moscow."
    ]
};

const pokerInstructor = {
    companyName:     "CardRunners.com",
    url:             "https://en.wikipedia.org/wiki/CardRunners",
    logo:            <img
                         src="./logos/cardrunners.png"
                         alt="CardRunners logo"
                         className="logo job-logo cr-logo"
                     />,
    location:        "Chicago, Vegas, Austin, NYC",
    title:           "Small-Stakes Online Poker Instructor",
    startDate:       "Jan 2007",
    endDate:         "Dec 2011",
    accomplishments: [
        "Authored and produced 60+ instructional videos of myself teaching and playing poker, typically 45 to 60 minutes in length.",
        "Pioneered the classroom-style video format with a focus on fundamentals grounded in game theory.",
        "Developed a five-part Small Stakes No-Limit Hold'em series to help recreational players become consistent winners.  Series was highly regarded within the poker community."
    ]
}

const myJobs = [ expediaPM, dynataSeniorPdM, dynataPdM, dynataPjM, pokerPlayer, pokerInstructor ];

export default myJobs;
