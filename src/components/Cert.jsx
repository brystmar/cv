import React from "react";
import PropTypes from "prop-types";

export default function Cert({
     name = "",
     issuer = "",
     logo = <img src="" alt="" />,
     url = "",
     date = "" })
{
    return (
        <article className="cert">
            <div className="cert-title">
                {name}
            </div>

            <div className="cert-content">
                <span className="col-logo-content logo-container">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >{logo}</a>
                </span>

                <span className="col-logo-content cert-details">
                    <span className="icon-plus-text">
                        <img
                            src="./icons/user-graduate-solid.svg"
                            alt={`Certification issued by ${issuer}`}
                            title={`Certification issued by ${issuer}`}
                            className="icon"
                        />
                        <span className="text">
                            <a
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{issuer}</a>
                        </span>
                    </span>

                    <span className="icon-plus-text">
                        <img
                            src="./icons/calendar-alt-regular.svg"
                            alt="Date issued"
                            title="Date issued"
                            className="icon"
                        />
                        <span className="text">{date}</span>
                    </span>
                </span>
            </div>
        </article>
    )
}

Cert.propTypes = {
    name:   PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    logo:   PropTypes.element.isRequired,
    url:    PropTypes.string.isRequired,
    date:   PropTypes.string.isRequired
}
