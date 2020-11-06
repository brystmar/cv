import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/styles.sass";
import "./styles/separators.sass";
import "./styles/content-sections.sass";
import PageSeparator from "./components/PageSeparator";

function App() {
    const [isNavExpanded, toggleIsNavExpanded] = useState(false)

    return (
        <div className="app-container" id="Top">
            <header className="header-container">
                <NavBar isNavExpanded={isNavExpanded}
                        toggleIsNavExpanded={toggleIsNavExpanded}/>
            </header>

            <main className={isNavExpanded ? "content-container hidden" : "content-container"}>
                <Home />
                <PageSeparator />

                <Experience />
                <PageSeparator />

                <Projects />
                <PageSeparator />

                <Certifications />
                <PageSeparator />

                <Education />
                <PageSeparator />

                <Contact />
            </main>

            {isNavExpanded ? "" : <Footer />}
        </div>
    );
}

export default App;