import React from "react";
import Hamburger from "./components/Hamburger";
import NavBar from "./components/NavBar";
import "./styles/styles.sass";

function App() {
    return (
        <div className="app-container">
            <header className="header-container" id="Top">
                <Hamburger />
                <NavBar />
                <h1>CV for Thomas Berg</h1>
            </header>
            <main className="content-container">
                Coming soon!
            </main>
            <footer className="footer-container">
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
