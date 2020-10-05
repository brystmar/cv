import React, {useState} from "react";
import NavBar from "./components/NavBar";
import "./styles/styles.sass";

function App() {
    const [isNavExpanded, toggleIsNavExpanded] = useState(false)

    return (
        <div className="app-container" id="Top">
            <header className="header-container">
                <NavBar isNavExpanded={isNavExpanded}
                        toggleIsNavExpanded={toggleIsNavExpanded}/>
            </header>
            <main className={isNavExpanded ? "content-container hidden" : "content-container"}>
                <h1>CV for Thomas Berg</h1>
                <p>Coming soon!</p>

                <section id="Experience" aria-label="Work experience">
                </section>

                <section id="Projects" aria-label="Personal projects">
                </section>

                <section id="Certifications" aria-label="Certifications attained">
                </section>

                <section id="Contact" aria-label="How to contact me">
                </section>
            </main>
            <footer className={isNavExpanded ? "footer-container hidden" : "footer-container"}>
                <p>
                    Do I even need a footer?
                </p>
                <p>
                    <a href="https://github.com/brystmar/">GitHub</a>
                </p>
            </footer>
        </div>
    );
}

export default App;
