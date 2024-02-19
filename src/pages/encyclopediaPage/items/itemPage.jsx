import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import EncyclopediaTile from "../../../components/ecyclopediaTile/encyclopediaTile.jsx";
import magicItemIMG from "../../../assets/subclasses.png"
import "./itemPage.css"

function ItemPage() {
    return (
        <>
            <BasicDragonBackground>
                <main>
                    <h1>Item</h1>
                    <p>Choose the type of item you want to find information about:</p>
                    <article className="tileBase">
                    <EncyclopediaTile title="Magic items" image={magicItemIMG} imageAlt="a hand holding a wand" linkPage="/encyclopedia/items/magicitems"/>
                    <EncyclopediaTile title="Weapons" image={magicItemIMG} linkPage="/encyclopedia/items/weapons"/>
                    <EncyclopediaTile title="Armor" image={magicItemIMG} linkPage="/encyclopedia/items/armor"/>
                    {/*<EncyclopediaTile title=""/>*/}
                    </article>
                </main>
            </BasicDragonBackground>
        </>
    );

}

export default ItemPage;