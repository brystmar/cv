import React from "react";

function Certification(props) {
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

Certification.defaultProps = {
    name: "",
    authority: "",
    url: "",
    date: "",
    number: ""
}

export default Certification;