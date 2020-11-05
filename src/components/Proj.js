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
        <span className="proj-tech-list-container" key={index}>
            <h3 className="proj-tech-list-type">{thing.type}</h3>
            <span className="proj-tech-list">
                {thing.items.map((value, index) =>
                    <span className="proj-tech-list-item" key={index}>
                        <span className="logo-container">{map_tech_to_icon(value)}</span>
                        <span className="list-item-label">{value}</span>
                    </span>)}
            </span>
        </span>);

    return (
        <article className="project">
            <span className="proj-title-section">
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
            </span>

            <span className="proj-desc">{props.description}</span>

            <div className="col-proj proj-screenshot-container">
                <a className="proj-link"
                   href={props.url}
                   target="_blank"
                   rel="noopener noreferrer">{props.screenshot}</a>
            </div>

            <div className="proj-notes">{notesList}</div>
            <p className={notesList.length > 1 ? "proj-read-more" : "hidden"}
               onClick={() => updateIsExpanded(!isExpanded)}>
                {isExpanded ? "- Collapse" : "+ Expand"}
            </p>

            <div className="col-proj proj-content">
                <span className="proj-tech">{techList}</span>
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