import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import BackgroundComponent from "../../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";
import "./BackgroundPage.css"
import alphabetizeInverseArray from "../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";
import sortBySource from "../../../Helpers/sorters/SortBySource.js";


function BackgroundPage() {

    const [apiData, setApiData] = useState([]);
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/backgrounds/?format=json");
                console.log(response.data.results)
                setApiData (response.data.results)
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main >
                <h1>Backgrounds</h1>
                <select name="sort"  onChange={(event) => setSortStyle(event.target.value)}>
                    <option value="alphabetized" selected>Alphabetized</option>
                    <option value="alphabetizedInv">Inversed alphabet</option>
                    <option value="source">Source</option>
                </select>

                {sortStyle === "alphabetized" && (
                    <div className="background-container">
                        {apiData.length > 0 ? (
                            apiData.map((dat, index) => (
                                <BackgroundComponent button="true" key={index} data={dat}/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}

                {sortStyle === "alphabetizedInv" && (
                    <div className="background-container">
                        {inverseApiData.length > 0 ? (
                            inverseApiData.map((dat, index) => (
                                <BackgroundComponent button="true" key={index} data={dat}/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}

                {sortStyle === "source" && (
                    <div className="background-container">
                        {sortSource.length > 0 ? (
                            sortSource.map((dat, index) => (
                                <BackgroundComponent button="true" key={index} data={dat}/>
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

export default BackgroundPage;