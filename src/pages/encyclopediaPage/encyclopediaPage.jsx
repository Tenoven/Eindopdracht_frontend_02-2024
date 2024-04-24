///// imports /////
import "./encyclopediaPage.css"
import EncyclopediaTile from "../../components/encyclopediacomponents/encyclopediaComponent/encyclopediaTile.jsx";
import raceimg from "../../assets/Races.png"
import classesimg from "../../assets/Classes.png"
import backgroundimg from "../../assets/Backgrounds.png"
import featsimg from "../../assets/feats.png"
import itemimg from "../../assets/items.png"
import spellsimg from "../../assets/spells.png"
import monsterimg from "../../assets/monsters.png"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

///// main function /////
function EncyclopediaPage() {
///// constants /////

///// functions /////

///// return /////
    return (
        <>
            <BasicDragonBackground>
                <main className="encyclopediaBox">
                    <h1>Encyclopedia</h1>
                    <article className="encyclopediaBody">
                        <EncyclopediaTile title="Races" image={raceimg} imageAlt="image of people in a circle" linkPage="/encyclopedia/races"/>
                        <EncyclopediaTile title="Classes" image={classesimg} imageAlt="image of a wizards hat" linkPage="/encyclopedia/classes"/>
                        <EncyclopediaTile title="Backgrounds" image={backgroundimg} imageAlt="image of a piece of paper" linkPage="/encyclopedia/backgrounds" />
                        <EncyclopediaTile title="Feats" image={featsimg} imageAlt="image of a diamond" linkPage="/encyclopedia/feats" />
                        <EncyclopediaTile title="Items" image={itemimg} imageAlt="image of a mushroom and a twig" linkPage="/encyclopedia/items" />
                        <EncyclopediaTile title="Spells" image={spellsimg} imageAlt="image of a spellbook" linkPage="/encyclopedia/spells" />
                        <EncyclopediaTile cl title="Monsters" image={monsterimg} imageAlt="image of a monster with multiple eyes" linkPage="/encyclopedia/monsters" />
                    </article>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default EncyclopediaPage;