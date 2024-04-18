import "./ErrorPage.css"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import {NavLink} from "react-router-dom";

function ErrorPage() {

    return (
        <>
            <BasicDragonBackground>
                <main className="errorPage">
                    <h2>An error has occurt;</h2>
                    <p>Please navigate to the homescreen with button underneath:</p>
                    <NavLink to="/home" className="yellow smallWidth">Go to home</NavLink>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default ErrorPage;