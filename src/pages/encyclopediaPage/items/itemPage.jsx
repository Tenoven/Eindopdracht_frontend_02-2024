import React, {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import EncyclopediaTile from "../../../components/ecyclopediaTile/encyclopediaTile.jsx";
import magicItemIMG from "../../../assets/subclasses.png"

function ItemPage(props) {
    let apiData = {}

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/spells/?format=json");
                console.log(response)
                apiData = response
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
        <main>
            <EncyclopediaTile title="Magic items" image={magicItemIMG} imageAlt="a hand holding a wand" />
            <EncyclopediaTile title="Weapons" image={magicItemIMG}/>
            <EncyclopediaTile title="Armor" image={magicItemIMG}/>
            {/*<EncyclopediaTile title=""/>*/}
        </main>
        </BasicDragonBackground>
    );
}

export default ItemPage;