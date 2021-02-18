import React from "react";
import PropTypes from "prop-types";

export default function Cert(props) {
    return (
        <article className="cert">
            <div className="cert-title">
                {props.name}
            </div>

            <div className="cert-content">
                <span className="col-logo-content logo-container">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >{props.logo}</a>
                </span>

                <span className="col-logo-content cert-details">
                    <span className="icon-plus-text">
                        <img
                            src="./icons/user-graduate-solid.svg"
                            alt={`Certification issued by ${props.issuer}`}
                            title={`Certification issued by ${props.issuer}`}
                            className="icon"
                        />
                        <span>
                            <a
                                href={props.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{props.issuer}</a>
                        </span>
                    </span>

                    <span className="icon-plus-text">
                        <img
                            src="./icons/calendar-alt-regular.svg"
                            alt="Date issued"
                            title="Date issued"
                            className="icon"
                        />
                        <span>{props.date}</span>
                    </span>
                </span>
            </div>
        </article>
    )
}

Cert.defaultProps = {
    name:   "",
    issuer: "",
    logo:   <img src="" alt="" />,
    url:    "",
    date:   ""
}

Cert.propTypes = {
    name:   PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    logo:   PropTypes.element.isRequired,
    url:    PropTypes.string.isRequired,
    date:   PropTypes.string.isRequired
}
