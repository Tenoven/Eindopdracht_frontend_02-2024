///// imports /////
import {Link} from "react-router-dom";
import "./encyclopediaComponent.css"

///// main function /////
function EncyclopediaTile({linkPage,image, title, imageAlt}) {
///// constants /////

///// functions /////

///// return /////
    return (
        <Link to={linkPage}>
            <div className="tileBody">
                <h2>{title}</h2>
                <img src={image} alt={imageAlt} className="tileImg"/>
            </div>
        </Link>
    );
}

export default EncyclopediaTile;