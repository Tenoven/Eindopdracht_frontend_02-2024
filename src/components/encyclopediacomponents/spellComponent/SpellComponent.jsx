///// imports /////

import {useState} from 'react';
import Button from "../../buttons/button.jsx";

///// main function /////
function SpellComponent(props) {
///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

///// functions /////

///// return /////
    return (
        <div className="featCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>

                {showMore ? (
                    <>
                        <p><i>Spell level: {apiData.level}</i></p>
                        <p><b>Casting time:</b> {apiData.casting_time}</p>
                        <p><b>Range:</b> {apiData.range}</p>
                        <p><b>Components:</b> {apiData.components} <i>{apiData.material !== "" && (<span>"{apiData.material}"</span>)}</i></p>
                        <p><b>Duration:</b> {apiData.duration}</p>
                        <p><b>Concentration:</b> {apiData.concentration}</p>
                        <p>{apiData.desc}</p>
                        
                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <Button className="yellow"  onClick={() => setShowMore(true)}>Show more</Button>
                )}

            </fieldset>
        </div>
    );
}

export default SpellComponent;