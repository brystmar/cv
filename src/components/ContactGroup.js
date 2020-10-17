import React from "react";
import PropTypes from "prop-types";

function ContactGroup(props) {
    return (
        <span className="contact-group">
            <img className="contact-group-img"
                 src={props.imgSource}
                 alt={props.imgDescription}/>

            {!!props.url && props.url.length > 1 ?
                <a className="contact-group-text"
                   href={props.url}
                   target="_blank"
                   rel="noopener noreferrer">{props.text}</a> :
                <span className="contact-group-text">{props.text}</span>}
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
    url: PropTypes.string,
    text: PropTypes.string.isRequired
}

export default ContactGroup;