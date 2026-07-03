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
        "Shepherded Egencia's live chat platform through two major vendor migrations while maintaining service continuity for ~240 agents across 19 countries, serving ~200k chats/year."
        , "Expanded ownership to include GBT Select's chat platform in Q2 2026 (~5x Egencia's volume) and identified a foundational data quality gap affecting thousands of customer interactions monthly. Currently leading root-cause remediation to eventually allow dissolving an offshore triage team that's currently dedicated to this issue."
        , "Led inception, development, design, and delivery of the first joint Egencia + GBT Select technical collaboration. This cross-platform sales enablement solution unified the top-of-funnel pipeline across brands. Shipped December 2023."
        , "Designed and shipped an automated user deprovisioning service integrating Workday → Active Directory → Okta → Salesforce, eliminating manual offboarding for 98% of these requests."
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
    accomplishments:    [
        "Designed, implemented, and deployed live agent chat as a new, lower-cost service channel for Egencia's ~25k B2B clients across 19 countries."
        , "Designed, implemented, and migrated 3000 Egencia travel agents to a custom Salesforce Service Cloud solution, enabling ops leadership to define and measure productivity KPIs for support teams."
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
        "Led integration efforts through 2019, supporting two M&A events which doubled the company’s size.  Combined platform handles >$800M annually."
        , "Architected a new, cloud-native lead-to-cash platform based on MS Dynamics 365 CRM and proprietary microservices."
        , "Spearheaded the rollout of a unified design system to standardize UI/UX across the platform."
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
        , "Led development of a web-based CPQ (configure/price/quote) UI to integrate with inventory forecasting service.  Managed from concept through storyboards, testing, and rollout.  This product further reduced median quote-prep time to 3½ minutes – down 92% overall."
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
        "Learned how to remain objective and make data-driven decisions under pressure."
        , "Typically played 6 to 8 concurrent tables, with >2 million total hands played lifetime."
        , "Private coach to more than a dozen students worldwide, from Modesto to Moscow."
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
