import React from 'react';
import "./mainButton.css"

function MainButton(props) {
    return (
        <>
            <button onClick={props.onClick} className="mainButton"> {props.buttonName} </button>
        </>
    );
}

export default MainButton;