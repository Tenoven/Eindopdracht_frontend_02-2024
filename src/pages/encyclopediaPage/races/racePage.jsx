import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import RaceComponent from "../../../components/race tile/RaceTile.jsx";
import "./racePage.css"

function RacePage() {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
                console.log("apiData in fetch",response.data.results)
                setApiData(response.data.results)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main >
                <h1>Races</h1>
                <div className="race-container">
                    {console.log("apiData in return", apiData)}
                    {apiData.length > 0 ? (
                        apiData.map((dat, index) => (
                            <RaceComponent key={index} data={dat}/>
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