import React, {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function RacePage(props) {
    let apiData = {}

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
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
            <p>racepage</p>
        </main>
        </BasicDragonBackground>
    );
}

export default RacePage;