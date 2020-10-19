import React from "react";
import PropTypes from "prop-types";

function Cert(props) {
    const certNumber = !props.number || props.number === "" ?
        "" : <span className="cert-number">{props.number}</span>

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
                </span>

                <span className="col-logo-content cert-details">
                    <span className="cert-date">{props.date}</span>
                    <span className="cert-issuer">{props.issuer}</span>
                    {certNumber}
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
    date: "",
    number: ""
}

Cert.propTypes = {
    name: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    number: PropTypes.string
}

export default Cert;