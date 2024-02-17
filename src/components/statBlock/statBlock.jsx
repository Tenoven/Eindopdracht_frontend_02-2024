import React, {useEffect, useState} from 'react';
import "./statBlock.css"
import {statCalculator} from "../../Helpers/stat-roller/statDiceRoller.js";

function StatBlock(props) {

    const [statComponent, setStatComponent] = useState(null)
    const [generateStatButton, setGenerateStatButton] = useState(null)


    useEffect(() => {
        switch (props.generation) {
            case "standardArray":
                setStatComponent(
                    <div className="underside">

                    </div>);
                break;

            case "pointBuy":
                setStatComponent(
                    <div className="underside">

                    </div>);
                break;

            case "manualIrl":
                setStatComponent(
                    <div className="underside">
                        <input type="text" name={props.stat} onChange={props.onChange} value={props.value} id={props.stat} />
                    </div>);
                break;

            case "manualDigi":
                setStatComponent(
                    <div className="underside">

                    </div>);
                break;
        }
    }, [props.generation, props.value]);


    return (
        <>
            <div className="statCard">
                <h3 className="title">{props.stat}</h3>
                {statComponent}
                {generateStatButton}
            </div>
        </>
    );
}

export default StatBlock;