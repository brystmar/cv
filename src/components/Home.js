import React from "react";
import Separator from "./Separator";

export default function Home(props) {
    return (
        <section
            id="HomeSection"
            aria-label="Home"
            className="home-section"
        >
            <span
                // Invisible spacer that sits behind the `position: fixed` navbar
                id="Home"
                aria-hidden="true"
                className={"nav-buffer".concat(props.isNavExpanded ? "" : " mobile-hidden")}
            />

            <div className="greeting">
                <div className="intro">Hello! I'm</div>
                <div className="name">Thomas</div>
                <div className="followup">
                    <p>I manage <a href="#Experience">products</a>.</p>
                    <p>I'm interested in <a href="#Projects">things</a>.</p>
                </div>
            </div>

            <div className="headshot-container">
                <img
                    src="https://storage.googleapis.com/tb-public-misc/projects/cv/img/headshot.jpg"
                    alt="Thomas wondering why his hair is retreating"
                    aria-label="Headshot"
                    className="headshot"
                />
            </div>

            <div className="highlights">
                <p className="highlight">
                    Customer-obsessed Product Manager with a passion for <strong>user
                    experience</strong>
                </p>

                <Separator />

                <p className="highlight">
                    Naturally <strong>curious</strong>, data-driven, and technical
                </p>

                <Separator />

                <p className="highlight">
                    Adventurous home cook
                    and smarthome <strong>enthusiast</strong>
                </p>
            </div>
        </section>
    )
}

Home.defaultProps = {
    isNavExpanded: false
}
