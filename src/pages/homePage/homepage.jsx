import React from 'react';
import Header from "../../components/header/header.jsx";
import SearchBar from "../../components/SearchBar/searchBar.jsx";
import Footer from "../../components/footer/footer.jsx";
import "./homePage.css"
import dragon from "../../assets/dragon.png"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function Homepage(props) {
    return (
        <>
            <Header></Header>
            <SearchBar></SearchBar>
            <BasicDragonBackground>
                <main>
                    <h1>Dungeons & Dragons
                        <br/>
                        5E Centre </h1>
                    <div className={"sectionCards"}>
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
                        <section className={"card"}>
                            <h2><u>Character Creator:</u></h2>
                            <p>
                                For a player a character is the most important part to play D&D.
                                Sadly creating a character sheet can be really though.
                                Use D&D 5E centre’s build-in character creator to make it a breeze!
                            </p>
                        </section>
                    </div>
                </main>
            </BasicDragonBackground>
            <Footer></Footer>
        </>
    );
}

export default Homepage;