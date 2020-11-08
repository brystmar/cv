import React from "react";
import Separator from "./Separator";

function Home() {
    return (
        <section
            id="Home"
            aria-label="Home"
            className="home-container">

            <div className="greeting">
                <p className="intro">Hello! I'm</p>
                <p className="name">Thomas</p>
                <p className="followup">I manage <a href="#Experience">products</a>.</p>
                <p className="followup">I'm interested in <a href="#Projects">things</a>.</p>
            </div>

            <div className="headshot-container">
                <img src="https://storage.googleapis.com/tb-public-misc/faces.jpg"
                     alt="Thomas sitting in a restaurant, making a goofy face"
                     className="headshot"/>
            </div>

            <div className="highlights">
                <p className="highlight">
                    Customer-obsessed Product Manager with a passion for <strong>user
                    experience</strong>
                </p>

                <Separator/>

                <p className="highlight">
                    Naturally <strong>curious</strong>, data-driven, and technical
                </p>

                <Separator/>

                <p className="highlight">
                    Avid <strong>home cook</strong>, exploring the intersection of food and tech
                </p>
            </div>
        </section>
    )
}

export default Home;