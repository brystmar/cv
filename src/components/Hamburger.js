import React, {useState} from 'react';

function Hamburger(props) {
    const [isHamburger, updateIsHamburger] = useState(true)

    let spans =
        <>
            <span> </span>
            <span> </span>
            <span> </span>
        </>

    return <a href="#top"
        // id={"nav-hamburger" + props.type}
        onClick={() => {
            console.log("Clicked!  Value changing to:", !isHamburger)
            updateIsHamburger(!isHamburger)
        }}
        className={isHamburger ? "nav-burger" + props.type : "nav-burger" + props.type + " open" + props.type}
        title={isHamburger ? "Menu" : "Close"}
        aria-label={isHamburger ? "Open navigation" : "Close navigation"}>
        {spans}
        {props.type === "2" ? spans : ""}
    </a>
}

Hamburger.defaultProps = {
    "type": 1
}

export default Hamburger;
