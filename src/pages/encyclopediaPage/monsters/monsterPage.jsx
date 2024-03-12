import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function MonsterPage() {

    const [apiData, setApiData] = useState([])

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/monsters/?format=json");
                console.log(response.data)
                setApiData(response.data)
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

export default MonsterPage;