import React from "react";
import ContactItem from "./ContactItem";
import myContactMethods from "../data/contact";

function Contact() {
    const contactList = myContactMethods.map((item, index) =>
        <ContactItem key={index}
                     text={item.text}
                     url={item.url}
                     image={item.image}/>)

    return (
        <section id="Contact"
                 aria-label="Ways to contact Thomas"
                 className="contact-section">

            <h1>Contact</h1>

            <article className="contacts">
                {contactList}
            </article>
        </section>
    )
}

export default Contact;