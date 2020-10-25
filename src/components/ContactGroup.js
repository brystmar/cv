import React from "react";
import PropTypes from "prop-types";

function ContactGroup(props) {
    return (
        <span className="contact-group">
            <img className="contact-group-img icon"
                 src={props.imgSource}
                 alt={props.imgDescription}/>

            <a href={props.url}
               target="_blank"
               rel="noopener noreferrer">{props.text}</a>
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