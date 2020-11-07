import React from "react";
import PropTypes from "prop-types";

function ContactGroup(props) {
    return (
        <span className="contact-group">
            <a href={props.url}
               className="contact-link"
               target="_blank"
               rel="noopener noreferrer">
                <img className="icon"
                     src={props.imgSource}
                     alt={props.imgDescription}/>

                <span className="label">{props.text}</span>
            </a>
        </span>
    )
}

ContactGroup.defaultProps = {
    imgSource: "",
    imgDescription: "",
    url: "",
    text: ""
}

ContactGroup.propTypes = {
    imgSource: PropTypes.string.isRequired,
    imgDescription: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default ContactGroup;