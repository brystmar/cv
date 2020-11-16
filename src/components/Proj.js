import React, {useState} from "react";
import PropTypes from "prop-types";
import map_tech_to_icon from "../scripts/map_tech_to_icon";

function Proj(props) {
    const [isExpanded, updateIsExpanded] = useState(false);

    const notesList = props.notes.map((note, index) => {
        if (index === 0) {
            return <p className={"proj-note"} key={index}>{note}</p>
        } else {
            return <p className={isExpanded ? "proj-note" : "proj-note hidden"}
                      key={index}>{note}</p>
        }
    });

    const techList = props.tech.map((thing, index) =>
        <div
            className={thing.type === "Infrastructure" && thing.items.length > 2 ? "proj-tech-type-container wide" : "proj-tech-type-container"}
            key={index}>
            <span className="proj-tech-type-label">{thing.type}</span>
            <span className="proj-tech-list">
                {thing.items.map((value, index) =>
                    <span className="proj-tech-list-item" key={index}>
                        <span className="logo-container">{map_tech_to_icon(value)}</span>
                        <span className="list-item-label">{value}</span>
                    </span>)}
            </span>
        </div>);

    return (
        <article className="project">
            <div className="proj-title-section">
                <span className="proj-name">{props.name}</span>
                <span className="proj-links">
                    <span className="proj-link-icon-container">
                        <a className="proj-link"
                           href={props.url}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="./icons/website.svg"
                                 alt="Website icon"
                                 className="icon icon-link"/>
                        </a>
                    </span>

                    <span className="proj-link-icon-container">
                        <a className="proj-link"
                           href={props.repo}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img src="./logos/github.svg"
                                 alt="GitHub icon"
                                 className="icon icon-link"/>
                        </a>
                    </span>
                </span>
            </div>

            <div className="proj-desc">{props.description}</div>

            <span className="proj-screenshot-notes">
                <div className="proj-screenshot-container">
                    <a className="proj-link"
                       href={props.url}
                       target="_blank"
                       rel="noopener noreferrer">{props.screenshot}</a>
                </div>

                <span className="proj-notes-group">
                    <div className="proj-notes">{notesList}</div>

                    <div className={notesList.length > 1 ? "proj-learn-more" : "hidden"}
                         onClick={() => updateIsExpanded(!isExpanded)}>
                        {isExpanded ? "Collapse" : "Learn More"}
                    </div>
                </span>
            </span>

            <div className="proj-tech">
                {techList}
            </div>
        </article>
    )
}

Proj.defaultProps = {
    name: "",
    description: "",
    notes: [""],
    url: "",
    repo: "",
    screenshot: <img src="" alt=""/>,
    tech: [{
        type: "",
        items: [""]
    }]
}

Proj.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    screenshot: PropTypes.element.isRequired,
    tech: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Proj;