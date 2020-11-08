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

function App() {
    const [isNavExpanded, toggleIsNavExpanded] = useState(false)

    return (
        <div className="app-container" id="Top">
            <header className={isNavExpanded ? "header-container mobile" : "header-container"}>
                <NavBar isNavExpanded={isNavExpanded}
                        toggleIsNavExpanded={toggleIsNavExpanded}/>
            </header>

            <main className={isNavExpanded ? "content-container mobile-hide" : "content-container"}>
                <Home />
                <Experience />
                <Projects />
                <Certifications />
                <Education />
                <Contact />
            </main>

            <footer className={isNavExpanded ? "footer-container mobile-hide" : "footer-container"}>
                <Footer />
            </footer>

        </div>
    );
}

export default App;