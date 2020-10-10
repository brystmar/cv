import React from "react";
import ContactGroup from "./ContactGroup";

function Contact() {
    return (
        <section id="Contact"
                 aria-label="How to contact me"
                 className="contact-container">

            <h1>Contact</h1>

            <p className="contact-list-items">
                <ContactGroup imgSource="../../public/icons/email.svg"
                              imgDescription="Send Thomas an email"
                              url="mailto:tp.berg+cv@gmail.com"
                              text="Email Me"/>

                <ContactGroup imgSource="../../public/icons/logo-linkedin.svg"
                              imgDescription="View Thomas Berg's profile on LinkedIn"
                              url="https://www.linkedin.com/in/t-berg/"
                              text="LinkedIn"/>

                <ContactGroup imgSource="../../public/icons/GitHub-Mark.eps"
                              imgDescription="View brystmar's repository on GitHub"
                              url="https://github.com/brystmar/"
                              text="GitHub"/>

                <span className="contact-group">
                    <img src="../../public/icons/map-marked-alt-solid.svg"
                         alt="Where Thomas lives"/>
                    Seattle, WA
                </span>
            </p>
        </section>
    )
}

export default Contact;