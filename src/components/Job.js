import React from "react";

function Job(props) {
    const accomplishmentsList = props.accomplishments.map(item =>
        <li>{item}</li>);

    return (
        <article className="job-container">
            <div className="job-col job-logo-container">
                {props.companyLogo}
            </div>

            <div className="job-col job-content">
                <h2 className="job-title">{props.title}</h2>

                <p className="job-details">
                    <ul>
                        <li>{props.companyName}</li>
                        <li>{props.location}</li>
                        <li>{props.startDate} to {props.endDate}</li>
                    </ul>
                </p>

                <p className="job-accomplishments">
                    <ul>{accomplishmentsList}</ul>
                </p>
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

export default Job;