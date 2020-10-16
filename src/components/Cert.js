import React from "react";
import PropTypes from 'prop-types';

function Cert(props) {
    const certAuthority = props.url === "" ?
        props.authority :
        <a className="cert-link" href={props.url}>{props.authority}</a>

    const certNumber = props.number === "" ?
        "" : <div className="cert-number">{props.number}</div>

    return (
        <article className="cert">
            <div className="cert-name">{props.name}</div>
            <div className="cert-authority">{certAuthority}</div>
            <div className="cert-date">{props.date}</div>
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