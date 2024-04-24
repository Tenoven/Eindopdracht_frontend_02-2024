///// imports /////
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import EncyclopediaTile from "../../../components/encyclopediacomponents/encyclopediaComponent/encyclopediaTile.jsx";
import magicItemIMG from "../../../assets/magic Item.png"
import weaponIMG from "../../../assets/Weapons.png"
import armorIMG from "../../../assets/Armor.png"
import "./itemPage.css"

///// main function /////
function ItemPage() {
///// constants /////

///// functions /////

///// return /////
    return (
        <>
            <BasicDragonBackground>
                <main className="mainPage">
                    <h1>Item</h1>
                    <p>Choose the type of item you want to find information about:</p>
                    <article className="tileBase">
                    <EncyclopediaTile title="Magic items" image={magicItemIMG} imageAlt="a hand holding a wand" linkPage="/encyclopedia/items/magicitems"/>
                    <EncyclopediaTile title="Weapons" image={weaponIMG} linkPage="/encyclopedia/items/weapons"/>
                    <EncyclopediaTile title="Armor" image={armorIMG} linkPage="/encyclopedia/items/armor"/>
                    </article>
                </main>
            </BasicDragonBackground>
        </>
    );

}

export default ItemPage;