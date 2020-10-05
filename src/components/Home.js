import React from "react";

function Home() {
    return (
        <section
            id="Home"
            aria-label="Home"
            className="home-container">

            <div className="greeting">
                <p className="intro">Hello! I'm</p>
                <p className="my-name">Thomas</p>
                <p className="followup">I manage <strong>products</strong></p>
                <p className="followup">I'm interested in <strong>things</strong></p>
            </div>

            <img src="https://storage.googleapis.com/tb-public-misc/faces.jpg"
                 alt="Thomas sitting at a table in a restaurant, making a goofy face"
                 className="headshot"/>

            <div className="highlights">
                <p>Customer-obsessed Product Manager with a passion for <strong>user experience</strong></p>
                <p>Naturally <strong>curious</strong>, data-driven, and technical</p>
                <p>Moonlights as a mad kitchen <strong>scientist</strong></p>
            </div>

        </section>
    )
}

export default Home;