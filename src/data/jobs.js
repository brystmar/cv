import React from "react";

const expediaSeniorPM = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    corporateGroupName: "AMEX Global Business Travel",
    corporateGroupUrl:  "https://www.amexglobalbusinesstravel.com/",
    logo:               <img
                            src="./logos/amex-gbt-stacked.svg"
                            alt="AMEX Global Business Travel corporate logo"
                            className="logo job-logo"
                        />,
    location:           "Seattle, WA",
    title:              "Senior Product Manager",
    startDate:          "Sep 2021",
    endDate:            "Present",
    accomplishments:    [
        "Led the backend portion of deprecating a legacy fee service platform, delivering expected annual savings of $3M.",
        "Implemented live chat for global pre-sales teams in 26 countries, leveraging auto-translation to expand previous sales reach."
    ]
};

const expediaPM = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    corporateGroupName: "Expedia Group",
    corporateGroupUrl:  "https://www.expediagroup.com/",
    logo:               <img
                            src="./logos/egencia.svg"
                            alt="Egencia corporate logo"
                            className="logo job-logo wide-logo"
                        />,
    location:           "Seattle, WA",
    title:              "Product Manager III",
    startDate:          "Feb 2020",
    endDate:            "Sep 2021",
    accomplishments:    [
        "Deployed live agent chat as a new, lower-cost service channel for >23,000 B2B clients across 19 countries.  First-contact resolution of chat inquiries is 28% higher than legacy support channels.",
        "Designed, implemented, and migrated 3000 travel agents to a custom Salesforce Service Cloud solution, enabling ops leadership to define and measure productivity KPIs for support teams."
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
        "Architected a new, cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and proprietary microservices.",
        "Spearheaded the adoption of a unified design system to standardize UI/UX across the platform."
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
        "Recognized as global SME in Oct 2013, then commissioned as a cross-regional consultant to drive efficiency metrics.",
        "Championed process re-engineering and user training on-site in London and EMEA satellite offices, boosting regional conversion by 43% in 13 weeks.  Developed tools to measure and sustain these improvements."
    ]
};

const pokerPlayer = {
    companyName:     "Self Employed",
    url:             "https://www.wikihow.com/Become-a-Professional-Poker-Player",
    logo:            <span className="logo job-logo poker-logos" />,
    location:        "Chicago, Las Vegas, Austin, NYC",
    title:           "Professional Poker Player \nand Coach",
    startDate:       "May 2007",
    endDate:         "Dec 2012",
    accomplishments: [
        "Learned to remain objective and make data-driven decisions under pressure.",
        "Typically played 6 to 8 concurrent tables, with >2 million total hands played lifetime.",
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
    location:        "Chicago, Las Vegas, Austin, NYC",
    title:           "Online Poker Instructor",
    startDate:       "Jan 2007",
    endDate:         "Dec 2011",
    accomplishments: [
        "Authored and produced 62 instructional videos teaching and playing poker, each 45 to 60 minutes in length.",
        "Pioneered the classroom-style video format with a focus on fundamentals grounded in game theory.",
        "Developed and released a five-part Small Stakes No-Limit Hold'em series to help recreational players become consistent winners."
    ]
};

const myJobs = [ expediaSeniorPM, expediaPM, dynataSeniorPdM, dynataPdM, dynataPjM, pokerPlayer, pokerInstructor ];

export default myJobs;
