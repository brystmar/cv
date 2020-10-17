import React from "react";
import PropTypes from "prop-types";

function Job(props) {
    const accomplishmentsList = props.accomplishments.map((item, index) =>
        <li key={index} className="job-accomplishments-list-item">{item}</li>);

    return (
        <article className="job-container">
            <div className="col-logo-content job-logo-container">
                {props.logo}
            </div>

            <div className="col-logo-content job-content">
                <span className="job-title">{props.title}</span>

                <span className="job-details">
                    <ul>
                        <li>{props.companyName}</li>
                        <li>{props.location}</li>
                        <li>{props.startDate} to {props.endDate}</li>
                    </ul>
                </span>

                <span className="job-accomplishments">
                    <ul>
                        {accomplishmentsList}
                    </ul>
                </span>
            </div>
        </article>
    )
}

Job.defaultProps = {
    companyName: "",
    logo: <img src="" alt=""/>,
    location: "",
    title: "",
    startDate: "",
    endDate: "",
    accomplishments: [""]
}

Job.propTypes = {
    companyName: PropTypes.string.isRequired,
    logo: PropTypes.element.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    accomplishments: PropTypes.arrayOf(PropTypes.string)
}

export default Job;