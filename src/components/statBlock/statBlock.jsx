///// imports /////

import {useEffect, useState} from 'react';
import "./statBlock.css"

///// main function /////
function StatBlock(props) {
///// constants /////

    const [statComponent, setStatComponent] = useState(null)

///// functions /////
    useEffect(() => {
        switch (props.generation) {
            case "standardArray":
                setStatComponent(
                    <div className="underside">
                        <select name={props.stat} defaultValue=" " onChange={props.onChange}>
                            <option value=" ">--</option>
                            {props.standardArray.map((stat, index) => {
                                return (
                                    <option key={index} value={stat}>{stat}</option>
                                )})}
                        </select>
                    </div>);
                break;

            case "manualIrl":
                setStatComponent(
                    <div className="underside">
                        <input type="number" min="1" max="20" name={props.stat} onChange={props.onChange} value={props.value} id={props.stat} />
                    </div>);
                break;

            case "manualDigi":
                setStatComponent(
                            <div className="underside">
                                <select name={props.stat} defaultValue=" " onChange={props.onChange}>
                                    <option value=" ">--</option>
                                    {props.statArray.map((stat, index) => {
                                        return (
                                            <option key={index} value={stat}>{stat}</option>
                                        )})}
                                </select>
                            </div>);
                break;

            case "filled":
                setStatComponent(
                    <div className="underside">
                        <input disabled={true} type="text" value={localStorage.getItem(`${props.stat}`) ? JSON.parse(localStorage.getItem(`${props.stat}`)): null }/>
                    </div>
                )
        }
    }, [props.generation, props.value, props.statArray]);


///// return /////
    return (
        <>
            <div className="statCard">
                <h3 className="title">{props.stat}</h3>
                {statComponent}
            </div>
        </>
    );
}

export default StatBlock;