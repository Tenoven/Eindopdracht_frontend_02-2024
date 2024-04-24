///// imports /////
import {useState} from "react";
import Button from "../../buttons/button.jsx";

///// main function /////
function ArmorComponent(props) {
///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

///// functions /////

///// return /////
    return (
        <div className="armorCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>

                {showMore ? (
                    <>
                        <p>Category: {apiData.category}</p>
                        <p>AC: {apiData.ac_string}</p>
                        <p>Cost: {apiData.cost}</p>

                        {apiData.stealth_disadvantage === true && (
                           <p>Has disadvantage on stealth checks</p>
                            )}

                        {apiData.strength_requirement !== null && (
                            <p>strength requirement: {apiData.strength_requirement}</p>
                        )}

                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <Button className="yellow"  onClick={() => setShowMore(true)}>Show more</Button>
                )}

            </fieldset>
        </div>
    );
}
export default ArmorComponent