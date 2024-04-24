///// imports /////
import dragon from "../../../assets/dragon.png";
import flippedDragon from "../../../assets/dragon-flipped.png"
import "../basicDragon/basicDragonBackground.css"

///// main function /////
function BasicDragonBackground(props) {
    ///// constants /////

    ///// functions /////

    ///// return /////
    return (
        <div className={"background"}>
            <div className={"imageLeft"}>
                <img src={flippedDragon} alt="image of a dragon"/>
            </div>
                {props.children}
            <div className={"imageRight"}>
                <img src={dragon} alt="image of a dragon"/>
            </div>
        </div>
    );
}

export default BasicDragonBackground;
