import React from "react";
import PropTypes from "prop-types";

function Job(props) {
    const accomplishmentsList = props.accomplishments.map(item =>
        <li>{item}</li>);

    return (
        <article className="job-container">
            <div className="job-col job-logo-container">
                {props.companyLogo}
            </div>

            <div className="job-col job-content">
                <div className="job-title">{props.title}</div>

                <div className="job-details">
                    <ul>
                        <li>{props.companyName}</li>
                        <li>{props.location}</li>
                        <li>{props.startDate} to {props.endDate}</li>
                    </ul>
                </div>

                <div className="job-accomplishments">
                    <ul>{accomplishmentsList}</ul>
                </div>
            </div>
        </article>
    )
}

Job.defaultProps = {
    companyName: "",
    companyLogo: <img src="/" alt="placeholder" className="job-logo"/>,
    location: "",
    title: "",
    startDate: "",
    endDate: "",
    accomplishments: [""]
}

Job.propTypes = {
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.element.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string,
    accomplishments: PropTypes.arrayOf(PropTypes.string)
}

export default Job;