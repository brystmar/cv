import React from "react";
import Logo from "./Logo";

export default function Footer() {
    const githubLink = <a
        href="https://github.com/brystmar/cv/"
        target="_blank"
        rel="noopener noreferrer"
    >Thomas Berg</a>;

    return <>
        {"A surprisingly-not-food-centric webapp\nby"} {githubLink} <Logo />
    </>
}
