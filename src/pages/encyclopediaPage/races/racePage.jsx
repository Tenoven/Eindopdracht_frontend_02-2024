import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import RaceComponent from "../../../components/encyclopediacomponents/race tile/RaceTile.jsx";
import "./racePage.css"

function RacePage() {
    const [apiRaceData, setApiRaceData] = useState([]);

    useEffect(() => {
        async function apiGetRaceInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
                // console.log("apiData in fetch",response.data.results)
                setApiRaceData(response.data.results)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetRaceInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main >
                <h1>Races</h1>
                <div className="race-container">
                    {apiRaceData.length > 0 ? (
                        apiRaceData.map((dat, index) => (
                            <RaceComponent key={index} data={dat} button="true"/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </main>
        </BasicDragonBackground>
    );
}

export default RacePage;