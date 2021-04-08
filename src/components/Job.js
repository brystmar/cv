import React from "react";
import PropTypes from "prop-types";

export default function Job(props) {
    const titleString = !!props.subtitle ? `${props.title}, \n${props.subtitle}` : props.title;

    return (
        <article className="job">
            <div className="job-title">
                {titleString}
            </div>

            <div className="col-logo-content">
                <span className="logo-container">
                    <a
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >{props.logo}</a>
                </span>

                <span className="job-details">
                    <span className="job-company-name">
                        <a
                            href={props.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >{props.companyName}</a>
                    </span>

                    <span className="icon-plus-text">
                        <img
                            src="./icons/map-location.svg"
                            alt="Job location"
                            title="Job location"
                            className="icon"
                        />
                        <span className="text">{props.location}</span>
                    </span>

                    <span className="icon-plus-text">
                        <img
                            src="./icons/calendar-alt-regular.svg"
                            alt="Dates employed"
                            title="Dates employed"
                            className="icon"
                        />
                        <span className="text">{`${props.startDate} to ${props.endDate}`}</span>
                    </span>
                </span>
            </div>

            <div className="job-content">
                <ul className="job-accomplishments">
                    {props.accomplishments.map((item, index) =>
                        <li key={index} className="job-accomplishments-list-item">{item}</li>
                    )}
                </ul>
            </div>
        </article>
    )
}

Job.defaultProps = {
    companyName:     "",
    url:             "",
    logo:            <img src="" alt="" />,
    location:        "",
    title:           "",
    subtitle:        "",
    startDate:       "",
    endDate:         "",
    accomplishments: [ "" ]
}

Job.propTypes = {
    companyName:     PropTypes.string.isRequired,
    url:             PropTypes.string.isRequired,
    logo:            PropTypes.element.isRequired,
    location:        PropTypes.string.isRequired,
    title:           PropTypes.string.isRequired,
    subtitle:        PropTypes.string,
    startDate:       PropTypes.string.isRequired,
    endDate:         PropTypes.string.isRequired,
    accomplishments: PropTypes.arrayOf(PropTypes.string)
}
