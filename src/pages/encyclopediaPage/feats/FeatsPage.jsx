import React, {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function FeatsPage(props) {

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
        <p>featspage</p>
        </main>
        </BasicDragonBackground>
    );
}

export default FeatsPage;