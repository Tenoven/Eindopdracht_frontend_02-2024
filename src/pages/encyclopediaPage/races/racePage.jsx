///// imports /////
import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import RaceComponent from "../../../components/encyclopediacomponents/race component/RaceComponent.jsx";
import "./racePage.css"
import alphabetizeInverseArray from "../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";
import sortBySource from "../../../Helpers/sorters/SortBySource.js";

///// main function /////
function RacePage() {
///// constants /////
    const [apiRaceData, setApiRaceData] = useState([]);
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")


///// functions /////
    useEffect(() => {
        async function apiGetRaceInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
                setApiRaceData(response.data.results)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetRaceInfo()
    }, [])

///// return /////
    return (
        <BasicDragonBackground>
            <main >
                <h1>Races</h1>
    <select name="sort"  onChange={(event) => setSortStyle(event.target.value)}>
<option value="alphabetized" selected>Alphabetized</option>
    <option value="alphabetizedInv">Inversed alphabet</option>
    <option value="source">Source</option>
</select>


    {sortStyle === "alphabetized" && (
                <div className="race-container">
                    {apiRaceData.length > 0 ? (
                        apiRaceData.map((dat, index) => (
                            <RaceComponent key={index} data={dat} button="true"/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
    )}

    {sortStyle === "alphabetizedInv" && (
        <div className="race-container">
            {inverseApiData.length > 0 ? (
                inverseApiData.map((dat, index) => (
                    <RaceComponent key={index} data={dat} button="true"/>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )}

    {sortStyle === "source" && (
        <div className="race-container">
            {sortSource.length > 0 ? (
                sortSource.map((dat, index) => (
                    <RaceComponent key={index} data={dat} button="true"/>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
        )}
            </main>
        </BasicDragonBackground>
    );
}

export default RacePage;