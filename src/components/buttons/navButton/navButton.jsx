import React from 'react';
import "./navButton.css"

function NavButton(props) {
    return (
        <>
            <button type="button" onClick={props.onClick} className="navButton"> {props.buttonName} </button>
        </>
    );
}

export default NavButton;