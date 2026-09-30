const egenciaPMLead = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    // corporateGroupName: "AMEX GBT",
    // corporateGroupUrl:  "https://www.amexglobalbusinesstravel.com/",
    logo:               <span className="logo job-logo egencia-gbt-logos" />,
    location:           "Seattle, WA",
    title:              "Product Manager Lead",
    subtitle:           "Service",
    startDate:          "Sep 2026",
    endDate:            "Present",
    accomplishments: [
        "Own strategy for a portfolio of servicing and operations products used by ~45k customer accounts across brands."
        , "Lead a team of product managers, driving 2027 planning and prioritization."
    ]
};

const egenciaSeniorPM = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    // corporateGroupName: "AMEX GBT",
    // corporateGroupUrl:  "https://www.amexglobalbusinesstravel.com/",
    logo:               <span className="logo job-logo egencia-gbt-logos" />,
    location:           "Seattle, WA",
    title:              "Senior Product Manager",
    startDate:          "Sep 2021",
    endDate:            "Sep 2026",
    accomplishments: [
        "Owned Egencia's live chat platform from its April 2020 launch, shepherding it through two major vendor migrations with zero downtime for hundreds of agents across 19 countries. Architected a scalable service-configuration framework for onboarding enterprise clients with specialized servicing needs."
        , "Grew chat from 0.2% to 9% of all customer contacts, shifting volume from higher-cost channels; integrated live agent handoff with a chatbot-first flow to achieve containment targets."
        , "Expanded scope to GBT Select's chat platform in Q2 2026 (1.2M chats/year), leading root-cause remediation of a data quality gap affecting thousands of chats monthly."
        , "Led the first joint Egencia + GBT Select technical collaboration, a cross-CRM sales enablement tool unifying top-of-funnel pipeline across brands and eliminating manual transfer of hundreds of leads per month."
        , "Designed and shipped an automated user deprovisioning service integrating Workday, Active Directory, Okta, and Salesforce, eliminating manual offboarding for 98% of requests."
    ]
};

const egenciaPM = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    // corporateGroupName: "Expedia Group",
    // corporateGroupUrl:  "https://www.expediagroup.com/",
    logo:               <span className="logo job-logo egencia-eg-logos" />,
    location:           "Seattle, WA",
    title:              "Product Manager III",
    startDate:          "Feb 2020",
    endDate:            "Sep 2021",
    accomplishments: [
        "Incepted Egencia's live agent chat offering from zero to global rollout across 19 countries in 8 months for ~20k customers: scoped platform architecture, made foundational trade-offs on routing and features."
        , "Expanded live chat to global pre-sales teams across 26 countries, leveraging auto-translation to extend sales reach into new markets and generate additional warm leads."
    ]
};

const dynataSeniorPdM = {
    companyName:     "Dynata",
    companyUrl:      "https://www.dynata.com/",
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
        "Led platform systems integration through two M&A events that nearly doubled the company's annual revenue."
        , "Contributed early architecture for a cloud-native lead-to-cash platform built on MS Dynamics 365 CRM and proprietary microservices."
    ]
};

const dynataPdM = {
    companyName:     "Dynata",
    companyUrl:      "https://www.dynata.com/",
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
        "Slashed median quote-prep time from 44 to 14 minutes (68% reduction) in the first year by refactoring workflows and applying UX fundamentals."
        , "Partnered with a dedicated UX resource to build a web-based CPQ tool from concept through rollout, reducing median quote-prep time to 3.5 minutes (92% overall reduction)."
        , "Built the business case to externalize the CPQ tool as a self-service product for strategic B2B customers, enabling real-time feasibility checks and direct purchasing without sales intermediaries."
    ]
};

const dynataPjM = {
    companyName:     "Dynata",
    companyUrl:      "https://www.dynata.com/",
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
        "Recognized as global subject-matter expert in Oct 2013, then commissioned as a cross-regional consultant to drive efficiency initiatives."
        , "Championed process re-engineering and user training on-site in London and EMEA satellite offices, boosting regional conversion by 43% in 13 weeks, then built tooling to measure and sustain these gains."
    ]
};

const pokerPlayer = {
    companyName:     "Self Employed",
    companyUrl:      "https://www.wikihow.com/Become-a-Professional-Poker-Player",
    logo:            <span className="logo job-logo poker-logos" />,
    location:        "Chicago, Las Vegas, Austin, NYC",
    title:           "Professional Poker Player \nand Coach",
    startDate:       "Jun 2007",
    endDate:         "Dec 2012",
    accomplishments: [
        "Played 6-8 concurrent tables simultaneously, leveraging game theory to strategically navigate uncertainty at scale across >2 million lifetime hands."
        , "Coached 12 students worldwide on decision frameworks, critical thinking, and emotional discipline, developing the ability to break down complex systems into teachable fundamentals."
    ]
};

const pokerInstructor = {
    companyName:     "CardRunners.com",
    companyUrl:      "https://en.wikipedia.org/wiki/CardRunners",
    logo:            <img
                         src="./logos/cardrunners.png"
                         alt="CardRunners logo"
                         className="logo job-logo cr-logo"
                     />,
    location:        "Chicago, Las Vegas, Austin, NYC",
    title:           "Online Poker Video Instructor",
    startDate:       "Jan 2007",
    endDate:         "Jul 2011",
    accomplishments: [
        "Authored and produced 62 instructional videos, pioneering a classroom-style format grounded in game theory."
    ]
};

const myJobs = [ egenciaPMLead, egenciaSeniorPM, egenciaPM, dynataSeniorPdM, dynataPdM, dynataPjM, pokerPlayer, pokerInstructor ];

export default myJobs;