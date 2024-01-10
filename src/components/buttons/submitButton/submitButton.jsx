import React from 'react';
import "./submitButton.css"

function SubmitButton(props) {
    return (
        <>
            <button type="submit"  className="submitButton"> {props.buttonName} </button>
        </>
    );
}

export default SubmitButton;