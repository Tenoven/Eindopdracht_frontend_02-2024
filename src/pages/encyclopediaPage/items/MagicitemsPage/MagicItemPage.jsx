import {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./MagicItemPage.css"

function MagicItemPage() {
    let apiData = {}

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/magicitems/?format=json");
                console.log(response.data)
                apiData = response.data
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main>
                <p>monsterpage</p>
            </main>
        </BasicDragonBackground>
    );
}

export default MagicItemPage;