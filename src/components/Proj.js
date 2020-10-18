import React from "react";
import PropTypes from "prop-types";

function Proj(props) {
    const techList = props.tech.map((thing, index) =>
        <span className="proj-tech-list-container" key={index}>
            <h3 className="proj-tech-list-type">{thing.type}</h3>
            <ul>
                {thing.items.map((value, index) =>
                    <li className="proj-tech-list-item" key={index}>{value}</li>)}
            </ul>
        </span>)

    return (
        <article className="proj-container">
            <div className="col-proj proj-screenshot-container">
                {props.screenshot}
            </div>

            <div className="col-proj proj-content">
                <span className="proj-name">
                    <a className="proj-link" href={props.url}>{props.name}</a>
                </span>
                <span className="proj-desc">{props.description}</span>
                <span className="proj-tech">{techList}</span>
            </div>
        </article>
    )
}

Proj.defaultProps = {
    name: "",
    description: "",
    url: "",
    screenshot: <img src="" alt=""/>,
    tech: [{
        type: "",
        items: [""]
    }]
}

Proj.defaultProps = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    screenshot: PropTypes.element.isRequired,
    tech: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Proj;