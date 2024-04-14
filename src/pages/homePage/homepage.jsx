import SearchBar from "../../components/SearchBar/searchBar.jsx";
import "./homePage.css"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import {statCalculator} from "../../Helpers/stat-roller/statDiceRoller.js";
import {Link} from "react-router-dom";

function HomePage() {
    return (
        <>
            <BasicDragonBackground>
                <main className="homepageBody">
                    <h1>Dungeons & Dragons <br/>
                        5E Centre </h1>
                    <div className={"sectionCards"}>
                            <Link to={"/encyclopedia"}>
                        <section className={"card"}>
                            <h2><u>Encyclopedia:</u></h2>
                            <p>Everything D&D has to offer. Learn about:</p>
                            <ul>
                                <li>Races</li>
                                <li>Classes</li>
                                <li>Backgrounds</li>
                                <li>SubClasses</li>
                                <li>Feats</li>
                                <li>Spells</li>
                                <li>Items</li>
                                <li>Monsters</li>
                            </ul>
                            <p>Happy learning!</p>
                        </section>
                            </Link>
                            <Link to={"/charactercreator"}>
                        <section className={"card"}>

                            <h2><u>Character Creator:</u></h2>
                            <p>
                                For a player a character is the most important part to play D&D.
                                Sadly creating a character sheet can be really though.
                                Use D&D 5E centre’s build-in character creator to make it a breeze!
                            </p>
                            <p><u>You do need to be logged in for this!</u></p>
                        </section>
                            </Link>
                    </div>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default HomePage;