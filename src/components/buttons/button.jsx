///// imports /////
import "./button.css"

///// main function /////
function Button(props) {
///// constants /////

///// functions /////

///// return /////
    return (
        <button
            type={props.type}
            className={props.className}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
}

export default Button;