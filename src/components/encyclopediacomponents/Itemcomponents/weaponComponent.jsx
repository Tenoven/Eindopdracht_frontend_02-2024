///// imports /////
import {useState} from "react";
import Button from "../../buttons/button.jsx";

///// main function /////
function WeaponComponent(props) {

///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

///// functions /////

///// return /////
    return (
        <div className="weaponCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>

                {showMore ? (
                    <>
                        <p> {"Cost: "+ apiData.cost}</p>
                        <p> {apiData.category} </p>
                        <p> {apiData.damage_dice} {apiData.damage_type}</p>
                        <h3>Properties:</h3>
                        <ul>
                        {apiData.properties.map((effect, index) => (
                            <li key={index}>{effect}</li>
                        ))}
                        </ul>

                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <Button className="yellow"  onClick={() => setShowMore(true)}>Show more</Button>
                )}

            </fieldset>
        </div>
    );
}
export default WeaponComponent