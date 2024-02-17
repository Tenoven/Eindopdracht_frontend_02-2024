import React from 'react';
import "./encyclopediaPage.css"
import SearchBar from "../../components/SearchBar/searchBar.jsx";
import EncyclopediaTile from "../../components/ecyclopediaTile/encyclopediaTile.jsx";
import raceimg from "../../assets/Races.png"
import classesimg from "../../assets/Classes.png"
import backgroundimg from "../../assets/Backgrounds.png"
import featsimg from "../../assets/feats.png"
import itemimg from "../../assets/items.png"
import spellsimg from "../../assets/spells.png"
import monsterimg from "../../assets/monsters.png"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function EncyclopediaPage(props) {
    return (
        <>
            <SearchBar></SearchBar>
            <BasicDragonBackground>
                <main>
                    <h1>Encyclopedia</h1>
                    <article className="encyclopediaBody">
                        <EncyclopediaTile title="Races" image={raceimg} imageAlt="image of people in a circle" linkPage=""/>
                        <EncyclopediaTile title="Classes" image={classesimg} imageAlt="image of a wizards hat" linkPage=""/>
                        <EncyclopediaTile title="Backgrounds" image={backgroundimg} imageAlt="image of a piece of paper" linkPage="" />
                        <EncyclopediaTile title="Feats" image={featsimg} imageAlt="image of a diamond" linkPage="" />
                        <EncyclopediaTile title="Items" image={itemimg} imageAlt="image of a mushroom and a twig" linkPage="" />
                        <EncyclopediaTile title="Spells" image={spellsimg} imageAlt="image of a spellbook" linkPage="" />
                        <EncyclopediaTile title="Monsters" image={monsterimg} imageAlt="image of a monster with multiple eyes" linkPage="" />
                    </article>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default EncyclopediaPage;