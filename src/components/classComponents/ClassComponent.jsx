import "./ClassComponent.css"
import MainButton from "../buttons/mainButton/mainButton.jsx";
import {useState} from "react";
function ClassComponent(props) {

    const [showMore, setShowMore] = useState(false)

    return (
        <>
        <div className="classCard">
            <fieldset className="boxes">
                <h2>{props.name}</h2>
                {showMore ? (
                    <>
                        <h3>Description:</h3>
                        <p>{props.description}</p>
                        <MainButton buttonName="Show less" onClick={() => {setShowMore(false)}}/>
                    </>
                ) : (

                    <MainButton buttonName="Show more" onClick={() => {setShowMore(true)}} />
                )}

            </fieldset>
        </div>
        </>
    );
}

export default ClassComponent;