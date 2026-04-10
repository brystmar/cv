import React from "react";
import PropTypes from "prop-types";

export default function Job({
    companyName = "",
    companyUrl = "",
    corporateGroupName = "",
    corporateGroupUrl = "",
    logo = <img src="" alt="" />,
    location = "",
    title = "",
    subtitle = "",
    startDate = "",
    endDate = "",
    accomplishments = [""] })
{
    // Some titles have a subtitle, which requires specific
    //  formatting to break properly at different screen sizes
    const titleString = !!subtitle ? `${title}, \n${subtitle}` : title;

    // If there's a corporate group provided, include this in the company
    //  name string and apply URLs for each
    const corpGroupAddendum =
        <span className="job-company-addendum">, an <a
            href={corporateGroupUrl}
            target="_blank"
            rel="noopener noreferrer"
        >{corporateGroupName}</a> brand</span>

    const companyAndCorpGroupString =
        <span className="job-company-name">
            <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
            >{companyName}</a>{!!corporateGroupName ? corpGroupAddendum : ""}
        </span>

    return (
        <article className="job">
            <div className="job-title">
                {titleString}
            </div>

            <div className="col-logo-content">
            <span className="logo-container">
            <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
            >{logo}</a>
            </span>

                <span className="job-details">
        {companyAndCorpGroupString}

                    <span className="icon-plus-text">
            <img
                src="./icons/map-location.svg"
                alt="Job location"
                title="Job location"
                className="icon"
            />
            <span className="text">{location}</span>
            </span>

            <span className="icon-plus-text">
            <img
                src="./icons/calendar-alt-regular.svg"
                alt="Dates employed"
                title="Dates employed"
                className="icon"
            />
            <span className="text">{`${startDate} to ${endDate}`}</span>
            </span>
            </span>
            </div>

            <div className="job-content">
                <ul className="job-accomplishments">
                    {accomplishments.map((item, index) =>
                        <li key={index} className="job-accomplishments-list-item">{item}</li>
                    )}
                </ul>
            </div>
        </article>
    )
}

Job.propTypes = {
    companyName:        PropTypes.string.isRequired,
    companyUrl:         PropTypes.string.isRequired,
    corporateGroupName: PropTypes.string,
    corporateGroupUrl:  PropTypes.string,
    logo:               PropTypes.element.isRequired,
    location:           PropTypes.string.isRequired,
    title:              PropTypes.string.isRequired,
    subtitle:           PropTypes.string,
    startDate:          PropTypes.string.isRequired,
    endDate:            PropTypes.string.isRequired,
    accomplishments:    PropTypes.arrayOf(PropTypes.string)
}
