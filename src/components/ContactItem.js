import React from "react";
import PropTypes from "prop-types";

function ContactItem(props) {
    return (
        <span className="contact-group">
            <a href={props.url}
               className="contact-link"
               target="_blank"
               rel="noopener noreferrer">

                {props.image}

                <span className="label">{props.text}</span>
            </a>
        </span>
    )
}

ContactItem.defaultProps = {
    text: "",
    url: "",
    image: <img src="" alt=""/>
}

ContactItem.propTypes = {
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    image: PropTypes.element.isRequired
}

export default ContactItem;