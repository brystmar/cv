import React from "react";
import PropTypes from "prop-types";

function Cert(props) {
    return (
        <article className="cert">
            <div className="cert-title">
                <a className="cert-link" href={props.url}>{props.name}</a>
            </div>

            <div className="cert-content">
                <span className="col-logo-content cert-logo-container">
                    <a className="logo-link"
                       href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">{props.logo}</a>
                    {/*{props.logo}*/}
                </span>

                <span className="col-logo-content cert-details">
                    <span className="icon-plus-text">
                        <img src="./icons/user-graduate-solid.svg"
                             alt={`Certification issued by ${props.issuer}`}
                             title={`Certification issued by ${props.issuer}`}
                             className="icon"/>
                        <span>{props.issuer}</span>
                    </span>

                    <span className="icon-plus-text">
                        <img src="./icons/calendar-alt-regular.svg"
                             alt="Dates employed"
                             title="Dates employed"
                             className="icon"/>
                        <span>{props.date}</span>
                    </span>
                </span>
            </div>
        </article>
    )
}

Cert.defaultProps = {
    name: "",
    issuer: "",
    logo: <img src="" alt=""/>,
    url: "",
    date: ""
}

Cert.propTypes = {
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Cert;