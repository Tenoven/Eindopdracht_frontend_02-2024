import React from 'react';
import dragon from "../../../assets/dragon.png";
import flippedDragon from "../../../assets/dragon-flipped.png"
import "../basicDragon/basicDragonBackground.css"


function BasicDragonBackground(props) {
    return (
        <div className={"background"}>
            <div className={"image"}>
            <img src={flippedDragon} alt="Background image of a dragon"/>
            </div>
            {props.children}
            <div className={"image"}>
            <img src={dragon} alt="Background image of a dragon"/>
            </div>
        </div>
    );
}

export default BasicDragonBackground;