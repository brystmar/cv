import React from "react";

const logoScrimba = <img
    src="./logos/scrimba.png"
    alt="Scrimba logo"
    title="Scrimba"
    className="logo cert-logo"
/>

const logoSalesforce = <img
    src="./logos/salesforce.png"
    alt="Salesforce logo"
    title="Salesforce"
    className="logo cert-logo"
/>

const logoGCP = <img
    src="./logos/GCP.png"
    alt="Google Cloud Platform logo"
    title="Google Cloud Platform"
    className="logo cert-logo"
/>

const frontend_bootcamp = {
    name:   "The Frontend Developer Bootcamp",
    issuer: "Scrimba",
    logo:   logoScrimba,
    url:    "https://scrimba.com/certificate/uGeLxkCg/gfrontend",
    date:   "Aug 2020 to Mar 2021"
};

const SF_service_cloud = {
    name:   "Salesforce Certified Service Cloud Consultant",
    issuer: "Salesforce",
    logo:   logoSalesforce,
    url:    "https://trailblazer.me/id/tpberg",
    date:   "Dec 2020",
    number: "21729528"
};

const react_bootcamp = {
    name:   "The React Bootcamp",
    issuer: "Scrimba",
    logo:   <img
                src="./logos/react.svg"
                alt="React logo"
                title="React"
                className="logo cert-logo"
            />,
    url:    "https://scrimba.com/certificate/uGeLxkCg/greact",
    date:   "Nov 2019 to Oct 2020"
};

const UI_design = {
    name:   "The UI Design Bootcamp",
    issuer: "Scrimba",
    logo:   logoScrimba,
    url:    "https://scrimba.com/certificate/uGeLxkCg/gdesignbootcamp",
    date:   "Aug 2020 to Sep 2020"
};

const responsive_web_design = {
    name:   "The Responsive Web Design Bootcamp",
    issuer: "Scrimba",
    logo:   logoScrimba,
    url:    "https://scrimba.com/certificate/uGeLxkCg/gresponsive",
    date:   "Jun 2020 to Sep 2020"
};

const SF_admin = {
    name:   "Salesforce Certified Administrator",
    issuer: "Salesforce",
    logo:   logoSalesforce,
    url:    "https://trailblazer.me/id/tpberg",
    date:   "Jun 2020",
    number: "21303901"
}

const PSPO = {
    name:   "Professional Scrum Product Owner",
    issuer: "Scrum.org",
    logo:   <img
                src="./logos/PSPO.png"
                alt="Scrum.org logo"
                title="Scrum.org"
                className="logo cert-logo"
            />,
    url:    "https://www.scrum.org/professional-scrum-product-owner-i-certification",
    date:   "Feb 2019"
};

const CSPO = {
    name:   "Certified Scrum Product Owner",
    issuer: "Scrum Alliance",
    logo:   <img
                src="./logos/CSPO.png"
                alt="Scrum Alliance logo"
                title="Scrum Alliance"
                className="logo cert-logo"
            />,
    url:    "https://www.scrumalliance.org/certifications/practitioners/cspo-certification",
    date:   "Oct 2015",
    number: "463201"
};

const GCP_core_infrastructure = {
    name:   "GCP Fundamentals: Core Infrastructure",
    issuer: "Coursera",
    logo:   logoGCP,
    url:    "https://www.coursera.org/account/accomplishments/verify/CZMR3HVMCE39",
    date:   "Mar 2019",
    number: "CZMR3HVMCE39"
};

const GCP_app_dev = {
    name:   "Getting Started with GCP App Development",
    issuer: "Coursera",
    logo:   logoGCP,
    url:    "https://www.coursera.org/account/accomplishments/verify/L7BGAT576A2H",
    date:   "Mar 2019",
    number: "L7BGAT576A2H"
};

const PY4E = {
    name:   "Python for Everyone",
    issuer: "Coursera",
    logo:   <img
                src="./logos/python.svg"
                alt="Python logo"
                title="Python"
                className="logo cert-logo"
            />,
    url:    "https://www.coursera.org/account/accomplishments/specialization/T68Z59NVH5FM",
    date:   "Mar 2018",
    number: "T68Z59NVH5FM"
};

const myCerts = [ frontend_bootcamp, SF_service_cloud, react_bootcamp, UI_design,
    responsive_web_design, SF_admin, PSPO, CSPO, GCP_core_infrastructure, GCP_app_dev, PY4E ];

export default myCerts;
