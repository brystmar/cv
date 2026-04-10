import React from "react";
import PropTypes from "prop-types";

export default function Degree({
   degreeType = "",
   degreeTypeAbbrev = "",
   degreeName = "",
   issuer = "",
   logo = <img src="" alt="" />,
   url = "",
   location = "",
   date = "" })
{
    return (
        <article className="degree">
            <div className="degree-title">
                <span title={degreeType} className="degree-abbrev">
                    {degreeTypeAbbrev + ": "}
                </span>
                <span className="degree-name">
                    {degreeName}
                </span>
            </div>

            <div className="degree-content">
                <div className="col-logo-content logo-container">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >{logo}</a>
                </div>

                <div className="col-logo-content degree-details">
                    <span className="icon-plus-text degree-issuer">
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

                    <span className="icon-plus-text degree-date">
                        <img
                            src="./icons/calendar-alt-regular.svg"
                            alt="Graduation date"
                            title="Graduation date"
                            className="icon"
                        />
                        <span className="text">{date}</span>
                    </span>

                    <span className="icon-plus-text degree-location">
                        <img
                            src="./icons/map-location.svg"
                            alt="School location"
                            title="School location"
                            className="icon"
                        />
                        <span className="text">{location}</span>
                    </span>
                </div>
            </div>
        </article>
    )
}

Degree.propTypes = {
    degreeType:       PropTypes.string.isRequired,
    degreeTypeAbbrev: PropTypes.string.isRequired,
    degreeName:       PropTypes.string.isRequired,
    issuer:           PropTypes.string.isRequired,
    logo:             PropTypes.element.isRequired,
    url:              PropTypes.string.isRequired,
    location:         PropTypes.string.isRequired,
    date:             PropTypes.string.isRequired
}
