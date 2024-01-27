import {useEffect, useState} from 'react';
import "./statBlock.css"

function StatBlock(props) {

    const [statComponent, setStatComponent] = useState("")
    // const [statInput, setStatInput] = useState("")




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
    }, [props.generation]);


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