import React, {useState} from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
                <Home />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
            </main>

            {isNavExpanded ? "" : <Footer />}
        </div>
    );
}

export default App;