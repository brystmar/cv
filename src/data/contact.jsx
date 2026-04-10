import React from "react";

const email = {
    text:  "Email",
    url:   "mailto:tp.berg+cv@gmail.com",
    image: <img
               src="./icons/email-trimmed.svg"
               alt="Email icon"
               className="icon"
           />
}

const linkedIn = {
    text:  "LinkedIn",
    url:   "https://www.linkedin.com/in/t-berg/",
    image: <img
               src="./logos/linkedin.svg"
               alt="LinkedIn logo"
               className="icon"
           />
}

const myContactMethods = [ email, linkedIn ];

export default myContactMethods;
