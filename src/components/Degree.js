import React from "react";
import PropTypes from "prop-types";

function Degree(props) {
    return (
        <article className="degree">
            <div className="degree-title">
                <span title={props.degreeType} className="degree-abbrev">
                    {props.degreeTypeAbbrev + ": "}
                </span>
                <span className="degree-name">
                    {props.degreeName}
                </span>
            </div>

            <div className="degree-content">
                <div className="col-logo-content degree-logo-container">
                    <a href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">{props.logo}</a>
                </div>

                <div className="col-logo-content degree-details">
                    <span className="degree-issuer">
                    <a href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">{props.issuer}</a>
                    </span>

                    <span className="degree-date">{props.date}</span>
                    <span className="degree-location">{props.location}</span>
                </div>
            </div>
        </article>
    )
}

Degree.defaultProps = {
    degreeType: "",
    degreeTypeAbbrev: "",
    degreeName: "",
    issuer: "",
    logo: <img src="" alt=""/>,
    url: "",
    location: "",
    date: ""
}

Degree.propTypes = {
    degreeType: PropTypes.string.isRequired,
    degreeTypeAbbrev: PropTypes.string.isRequired,
    degreeName: PropTypes.string.isRequired,
    issuer: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
    url: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

export default Degree;