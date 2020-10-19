import React from "react";
import PropTypes from "prop-types";

function Job(props) {
    const accomplishmentsList = props.accomplishments.map((item, index) =>
        <li key={index} className="job-accomplishments-list-item">{item}</li>);

    const titleString = !!props.subtitle ? `${props.title}, \n${props.subtitle}` : props.title;

    return (
        <article className="job-container">
            <div className="job-title">
                {titleString}
            </div>

            <div className="col-logo-content">
                <span className="job-logo-container">
                    <a className="logo-link"
                       href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">{props.logo}</a>
                </span>

                <span className="job-details">
                    <span className="job-company-name">
                        <a href={props.url}
                           target="_blank"
                           rel="noopener noreferrer">{props.companyName}</a>
                    </span>

                    <span className="job-location icon-plus-text">
                        <img src="./icons/map-location.svg"
                             alt="Job location"
                             title="Job location"
                             className="icon"/>
                        <span>{props.location}</span>
                    </span>

                    <span className="job-dates icon-plus-text">
                        <img src="./icons/calendar-alt-regular.svg"
                             alt="Dates employed"
                             title="Dates employed"
                             className="icon"/>
                        <span>{`${props.startDate} to ${props.endDate}`}</span>
                    </span>
                </span>
            </div>

            <div className="job-content">
                <ul className="job-accomplishments">
                    {accomplishmentsList}
                </ul>
            </div>
        </article>
    )
}

Job.defaultProps = {
    companyName: "",
    url: "",
    logo: <img src="" alt=""/>,
    location: "",
    title: "",
    subtitle: "",
    startDate: "",
    endDate: "",
    accomplishments: [""]
}

Job.propTypes = {
    companyName: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    accomplishments: PropTypes.arrayOf(PropTypes.string)
}

export default Job;