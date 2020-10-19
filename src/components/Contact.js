import React from "react";
import ContactGroup from "./ContactGroup";

function Contact() {
    return (
        <section id="Contact"
                 aria-label="How to contact Thomas"
                 className="contact-container">

            <h1>Contact</h1>

            <article className="contact-list-items">
                <ContactGroup imgSource="./icons/email-trimmed.svg"
                              imgDescription="Send Thomas an email"
                              url="mailto:tp.berg+cv@gmail.com"
                              text="Email Thomas"/>

                <ContactGroup imgSource="./logos/linkedin.svg"
                              imgDescription="View Thomas Berg's profile on LinkedIn"
                              url="https://www.linkedin.com/in/t-berg/"
                              text="LinkedIn"/>

                <ContactGroup imgSource="./logos/github.svg"
                              imgDescription="View brystmar's repositories on GitHub"
                              url="https://github.com/brystmar/"
                              text="GitHub"/>
            </article>
        </section>
    )
}

export default Contact;