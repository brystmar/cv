import React from "react";
import ContactItem from "./ContactItem";
import myContactMethods from "../data/contact";

export default function Contact() {
    return (
        <section
            id="Contact"
            aria-label="Ways to contact Thomas"
            className="contact-section"
        >
            <h1>Contact</h1>
            <article className="contacts">
                {myContactMethods.map((item, index) =>
                    <ContactItem
                        key={index}
                        text={item.text}
                        url={item.url}
                        image={item.image}
                    />)}
            </article>
        </section>
    )
}
