import {useEffect, useState} from 'react';
import "./statBlock.css"

function StatBlock(props) {

    const [statComponent, setStatComponent] = useState(null)

    const newArray = [...props.statArray]

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
                        <input type="text" name={props.stat} onChange={props.onChange} value={props.value} id={props.stat} />
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