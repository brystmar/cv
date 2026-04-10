import React from "react";
import PropTypes from "prop-types";

export default function ContactItem({
    text = "",
    url = "",
    image = <img src="" alt="" /> })
{
    return (
        <span className="contact-group">
            <a
                href={url}
                className="contact-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {image}
                <span className="label">{text}</span>
            </a>
        </span>
    )
}

ContactItem.propTypes = {
    text:  PropTypes.string.isRequired,
    url:   PropTypes.string.isRequired,
    image: PropTypes.element.isRequired
}
