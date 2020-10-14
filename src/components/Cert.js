import React from "react";
import PropTypes from 'prop-types';

function Cert(props) {
    const certAuthority = props.url === "" ?
        props.authority :
        <a className="cert-link" href={props.url}>{props.authority}</a>

    const certNumber = props.number === "" ?
        "" : <span className="cert-number">{props.number}</span>

    return (
        <article className="cert">
            <span className="cert-name">{props.name}</span>
            <span className="cert-authority">{certAuthority}</span>
            <span className="cert-date">{props.date}</span>
            {certNumber}
        </article>
    )
}

Cert.defaultProps = {
    name: "",
    authority: "",
    url: "",
    date: "",
    number: ""
}

Cert.propTypes = {
    name: PropTypes.string.isRequired,
    authority: PropTypes.string.isRequired,
    url: PropTypes.string,
    date: PropTypes.string.isRequired,
    number: PropTypes.string
}

export default Cert;