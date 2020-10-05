import React from "react";

function ContactGroup(props) {
    return (
        <span className="contact-group">
            <img src={props.imgSource}
                 alt={props.imgDescription}/>

            <a href={props.url}
               target="_blank"
               rel="noopener noreferrer">{props.text}</a>
        </span>
    )
}

ContactGroup.defaultProps = {
    imgSource: "/",
    imgDescription: "",
    url: "/",
    text: ""
}

export default ContactGroup;