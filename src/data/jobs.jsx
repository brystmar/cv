const egenciaSeniorPM = {
    companyName:        "Egencia",
    companyUrl:         "https://www.egencia.com/",
    // corporateGroupName: "AMEX GBT",
    // corporateGroupUrl:  "https://www.amexglobalbusinesstravel.com/",
    logo:               <span className="logo job-logo egencia-gbt-logos" />,
    location:           "Seattle, WA",
    title:              "Senior Product Manager",
    startDate:          "Sep 2021",
    endDate:            "Present",
    accomplishments: [
        "Shepherded Egencia's live chat platform through two major vendor migrations while maintaining service continuity for hundreds of agents across 19 countries, serving ~200k B2B support chats annually."
        , "Expanded ownership to include GBT Select's chat platform in Q2 2026 (~1M annual chats) and identified a foundational data quality gap affecting thousands of monthly customer interactions. Currently leading root-cause remediation to eventually allow dissolving an offshore triage team dedicated to this issue."
        , "Led inception, development, design, and delivery of the first joint Egencia + GBT Select technical collaboration. This cross-platform sales enablement solution unified the top-of-funnel pipeline across brands. Shipped December 2023."
        , "Designed and shipped an automated user deprovisioning service integrating Workday → Active Directory → Okta → Salesforce, eliminating manual offboarding for 98% of requests."
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
        "Incepted Egencia's live agent chat offering from the ground up, from zero to global rollout across 19 countries in ~8 months. Scoped platform architecture, made foundational technical trade-offs on routing and features, and piloted with a single customer in Norway before expanding to all primary markets by end of 2020."
        , "Designed and delivered a custom Salesforce Service Cloud implementation, migrating ~3000 Egencia travel agents to a unified support platform and giving ops leadership their first structured view of team productivity and KPIs."
        , "Expanded live agent chat to Egencia's global pre-sales teams across 26 countries, leveraging auto-translation to extend sales reach into new markets — delivering $2M in incremental sales in 2021."
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
        "Led platform integration efforts through 2019, supporting two M&A events that doubled the company's size. Combined platform handled >$800M annually."
        , "Contributed early architecture for a cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and proprietary microservices."
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
        "Slashed median quote-prep time from 44 to 14 minutes (68%) in the first year by optimizing workflow and applying UX fundamentals."
        , "Partnered with a dedicated designer to build a web-based CPQ tool from concept through rollout, reducing median quote-prep time to 3½ minutes — down 92% overall."
        , "Built the business case to externalize this CPQ tool as a self-service product for strategic B2B customers, enabling real-time feasibility checks and direct purchasing without sales intermediaries."
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
        "Recognized as global SME in Oct 2013, then commissioned as a cross-regional consultant to drive efficiency initiatives."
        , "Championed process re-engineering and user training on-site in London and EMEA satellite offices, boosting regional conversion by 43% in 13 weeks.  Developed tools to measure and sustain these improvements."
    ]
};

const pokerPlayer = {
    companyName:     "Self Employed",
    companyUrl:      "https://www.wikihow.com/Become-a-Professional-Poker-Player",
    logo:            <span className="logo job-logo poker-logos" />,
    location:        "Chicago, Las Vegas, Austin, NYC",
    title:           "Professional Poker Player \nand Coach",
    startDate:       "May 2007",
    endDate:         "Dec 2012",
    accomplishments: [
        "Made thousands of high-stakes decisions daily, strategically navigating uncertainty with incomplete information."
        , "Played 6-8 concurrent tables simultaneously, managing cognitive load and pattern recognition at scale across >2 million lifetime hands."
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
    endDate:         "Dec 2011",
    accomplishments: [
        "Authored and produced 62 instructional videos teaching and playing poker, each 45 to 60 minutes in length."
        , "Pioneered the classroom-style video format with a focus on fundamentals grounded in game theory. This eventually became an industry-standard format.",
    ]
};

const myJobs = [ egenciaSeniorPM, egenciaPM, dynataSeniorPdM, dynataPdM, dynataPjM, pokerPlayer, pokerInstructor ];

export default myJobs;
