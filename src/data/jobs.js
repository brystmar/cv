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
    title:           "Salesforce Product Manager III",
    startDate:       "Feb 2020",
    endDate:         "Present",
    accomplishments: [
        "Decreased average case handle time by 26% for >3000 travel agents by migrating from legacy systems to Salesforce Service Cloud.",
        "Deployed live agent chat w/integrated chatbot for >18,500 clients across 19 countries.",
        "Chat availability decreased support requests via email by 21%, phone by 37%.",
        "Currently implementing real-time translation to enable a location-agnostic WFM model."
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
        "Led platform integration through two M&A events, which more than doubled the company’s annual revenue.",
        "Architected a new, cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and internal microservices.",
        "Spearheaded the adoption of a unified design system to standardize UI components across platforms."
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
        "Efficiency gains enabled the Sales org to reassign support personnel to more value-focused roles.",
        "Developed a web-based quoting + pricing tool based on microservices.  Managed from storyboard concept through release and adoption.  Further reduced median quote-prep time to 3½ minutes – down 92% overall."
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
        "Typically played 6 to 8 tables concurrently, with >2 million total hands played lifetime.",
        "Specialized in online short-handed cash games of No-Limit Hold'em (NLHE) and Pot-Limit Omaha (PLO).",
        "Won the $200 Full Tilt Sunday Tournament in Nov 2008, besting 3600 other players.",
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
        "Scripted, produced, and recorded 62 instructional videos of myself teaching and/or playing, each 45 to 60 minutes long.",
        "Pioneered the classroom-style video format with a focus on fundamentals and applied theory.",
        "Developed a five-part Small Stakes No-Limit (SSNL) series to help casual players become consistent winners.  Series was highly regarded within the poker community."
    ]
}

const myJobs = [ expediaPM, dynataSeniorPdM, dynataPdM, dynataPjM, pokerPlayer, pokerInstructor ];

export default myJobs;