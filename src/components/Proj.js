import React, { useState } from "react";
import PropTypes from "prop-types";
import map_tech_to_icon from "../helpers/map_tech_to_icon";

export default function Proj(props) {
    const [ isExpanded, updateIsExpanded ] = useState(false);

    // Only display the first item from notesList by default; user can expand if desired
    const notesList = props.notes.map((note, index) => {
        if (index === 0) {
            return <p key={index} className={"proj-note"}>{note}</p>
        } else {
            return <p
                key={index}
                className={"proj-note more-notes".concat(isExpanded ? " expanded" : "")}
            >{note}</p>
        }
    });

    // Lift the tall/wide class to the screenshot container for proper scaling
    let screenshotNotesClass = "proj-screenshot-notes";
    let screenshotContainerClass = "proj-screenshot-container";

    if (props.screenshot.props.className.indexOf("tall") !== -1) {
        screenshotNotesClass += " tall"
        screenshotContainerClass += " tall"
    } else if (props.screenshot.props.className.indexOf("wide") !== -1) {
        screenshotNotesClass += " wide"
        screenshotContainerClass += " wide"
    }

    // Only display status when it's provided
    const currentStatus = !!props.status ? (
        <div className="proj-status-group icon-plus-text">
            <img
                src="./icons/info-circle-solid.svg"
                alt={`Status of the ${props.name} project`}
                title={`Status of the ${props.name} project`}
                className="icon"
            />
            <span className="proj-status">{props.status}</span>
        </div>
    ) : null;

    // techList requires two layers of mapping
    const techList = props.tech.map((tech, index) =>
        <div
            key={index}
            className={tech.type === "Infrastructure" && tech.items.length > 2 ?
                "proj-tech-type-container wide" : "proj-tech-type-container"}
        >
            <span className="proj-tech-type-label">{tech.type}</span>
            <span className="proj-tech-list">
                {tech.items.map((value, index) =>
                    <span className="proj-tech-list-item" key={index}>
                        <span className="logo-container">{map_tech_to_icon(value)}</span>
                        <span className="list-item-label">{value}</span>
                    </span>)}
            </span>
        </div>
    );

    return (
        <article className="project">
            <div className="proj-title-section">
                <span className="proj-name">{props.name}</span>
                <span className="proj-links">
                    <span className="proj-link-icon-container">
                        <a
                            className="proj-link"
                            href={props.url}
                            aria-label="Link to this project's homepage"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./icons/website.svg"
                                alt="Website icon"
                                className="icon icon-link"
                            />
                        </a>
                    </span>

                    <span className="proj-link-icon-container">
                        <a
                            className="proj-link"
                            href={props.repo}
                            aria-label="Link to this project's GitHub repository"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="./logos/github.svg"
                                alt="GitHub icon"
                                className="icon icon-link"
                            />
                        </a>
                    </span>
                </span>
            </div>

            <div className="proj-description-group">
                <div className="proj-desc">{props.description}</div>
                {currentStatus}
            </div>

            <div className={screenshotNotesClass}>
                <div className={screenshotContainerClass}>
                    <a
                        className="proj-link"
                        href={props.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >{props.screenshot}</a>
                </div>

                <div className="proj-notes-group">
                    <div className="proj-overview">
                        <h3>Overview</h3>
                        <div className="proj-notes">{notesList}</div>

                        <div
                            className={notesList.length > 1 ? "proj-learn-more" : "hidden"}
                            onClick={() => updateIsExpanded(!isExpanded)}
                            aria-label={isExpanded ?
                                "Hide the longer description of this project" :
                                "Show the longer description of this project"}
                        >
                            {isExpanded ? "Collapse" : "Learn More"}
                        </div>
                    </div>
                </div>
            </div>

            <div className="proj-tech">
                {techList}
            </div>
        </article>
    )
}

Proj.defaultProps = {
    name:        "",
    description: "",
    notes:       [ "" ],
    url:         "",
    repo:        "",
    screenshot:  <img src="" alt="" />,
    tech:        [ {
        type:  "",
        items: [ "" ]
    } ]
}

Proj.propTypes = {
    name:        PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status:      PropTypes.string,
    notes:       PropTypes.arrayOf(PropTypes.string).isRequired,
    url:         PropTypes.string.isRequired,
    repo:        PropTypes.string.isRequired,
    screenshot:  PropTypes.element.isRequired,
    tech:        PropTypes.arrayOf(PropTypes.object).isRequired
}
