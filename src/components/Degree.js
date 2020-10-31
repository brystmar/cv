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
                    <span className="icon-plus-text degree-issuer">
                        <img src="./icons/user-graduate-solid.svg"
                             alt={`Certification issued by ${props.issuer}`}
                             title={`Certification issued by ${props.issuer}`}
                             className="icon"/>
                        <a href={props.url}
                           target="_blank"
                           rel="noopener noreferrer">{props.issuer}</a>
                    </span>

                    <span className="icon-plus-text degree-date">
                        <img src="./icons/calendar-alt-regular.svg"
                             alt="Graduation date"
                             title="Graduation date"
                             className="icon"/>
                        <span>{props.date}</span>
                    </span>

                    <span className="icon-plus-text degree-location">
                        <img src="./icons/map-location.svg"
                             alt="School location"
                             title="School location"
                             className="icon"/>
                        <span>{props.location}</span>
                    </span>
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