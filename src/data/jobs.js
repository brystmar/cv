import React from "react";

const expediaPM = {
    companyName: "Expedia Group",
    url: "https://www.expediagroup.com/",
    logo: <img
        src="./logos/expedia-group.svg"
        alt="Expedia Group corporate logo"
        className="job-logo-image"/>,
    location: "Seattle, WA",
    title: "Technical Product Manager",
    startDate: "Feb 2020",
    endDate: "Present",
    accomplishments: [
        "Did stuff",
        "Especially live chat things."
    ]
};

const dynataSeniorPdM = {
    companyName: "Dynata",
    url: "https://www.dynata.com/",
    logo: <img
        src="./logos/dynata.png"
        alt="Dynata corporate logo"
        className="job-logo-image"/>,
    location: "Seattle, WA",
    title: "Senior Product Manager, Platform Systems",
    startDate: "Apr 2019",
    endDate: "Feb 2020",
    accomplishments: [
        "Led integration efforts through 2019, supporting two M&A events which doubled the company’s size.  Combined platform handles >$800MM (USD) annually.",
        "Architected a new, cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and proprietary microservices.",
        "Spearheaded adoption of a unified design system to standardize UI elements across platforms."
    ]
};

const dynataPdM = {
    companyName: "Dynata",
    url: "https://www.dynata.com/",
    logo: <img
        src="./logos/dynata.png"
        alt="Dynata corporate logo"
        className="job-logo-image"/>,
    location: "Plano, TX and Seattle, WA",
    title: "Product Manager, Platform Systems",
    startDate: "Jul 2015",
    endDate: "Mar 2019",
    accomplishments: [
        "Slashed median quote-prep time from 44 to 14 minutes (68%) in the first year, enabling the Sales org to reassign support personnel to more value-focused roles.",
        "Developed a web-based quoting + pricing tool based on microservices and integrated with Salesforce.  Managed from storyboard concept through release and adoption.  Further reduced median quote-prep time to 3½ minutes – down 92% overall.",
        "Published a quarterly UX analysis of common tasks, demonstrating KPI improvements."
    ]
};

const dynataPjM = {
    companyName: "Dynata",
    url: "https://www.dynata.com/",
    logo: <img
        src="./logos/dynata.png"
        alt="Dynata corporate logo"
        className="job-logo-image"/>,
    location: "Plano, TX",
    title: "Project Manager",
    startDate: "May 2013",
    endDate: "Jun 2015",
    accomplishments: [
        "Coordinated customers and relevant stakeholders to deliver insightful market research.",
        "Recognized as global SME by leadership in Oct 2013; commissioned as a cross-regional consultant to drive efficiency metrics.",
        "Championed process re-engineering and user training on-site in London and EMEA satellite offices, boosting regional conversion rates by 43% in 13 weeks.",
        "Developed tools to measure and sustain these improvements."
    ]
};

const poker = {
    companyName: "Self Employed",
    url: "https://en.wikipedia.org/wiki/PokerStars",
    logo: <img src="./icons/poker-card.svg"
               alt="Poker card"
               className="job-logo-image"/>,
    location: "Chicago, Las Vegas, and NYC",
    title: "Professional Poker Player and Coach",
    startDate: "May 2007",
    endDate: "Dec 2012",
    accomplishments: [
        "Learned to remain objective and make data-driven decisions under pressure.",
        "Typically played 6 to 8 tables concurrently; played >1.5MM total hands lifetime.",
        "Authored, produced, & released 62 instructional videos for CardRunners.com, each w/45-60min of commentary and insights.",
        "Private coach to more than a dozen students worldwide, from Modesto to Moscow.",
        "Specialized in short-handed cash games of No-Limit Hold'em and Pot-Limit Omaha."
    ]
};

const myJobs = [expediaPM, dynataSeniorPdM, dynataPdM, dynataPjM, poker];

export default myJobs;