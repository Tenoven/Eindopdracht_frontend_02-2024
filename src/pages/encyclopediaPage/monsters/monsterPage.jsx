import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import MonsterComponent from "../../../components/encyclopediacomponents/monsterComponent/monsterComponent.jsx";
import Button from "../../../components/buttons/button.jsx";
import "./monsterPage.css"
import alphabetizeInverseArray from "../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";
import sortBySource from "../../../Helpers/sorters/SortBySource.js";

function MonsterPage() {

    const [apiData, setApiData] = useState([])
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/monsters/?format=json")
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")



    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
                setApiData(response.data)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [apiLink])

    function setNext() {
        setApiLink(apiData.next)
    }

    function setPrev() {
        setApiLink(apiData.previous)
    }

    return (
        <BasicDragonBackground>
            <main>
                <h1>Monster Bestiary</h1>

                <div className="prevNextButtons">
                    {apiData.previous !== null && (
                        <Button onClick={setPrev} className="yellow" >Previous</Button>
                    )}

                    {apiData.next !== null && (
                        <Button onClick={setNext} className="yellow" >Next</Button>
                    )}
                </div>

                <select name="sort"  onChange={(event) => setSortStyle(event.target.value)}>
                    <option value="alphabetized" selected>Alphabetized</option>
                    <option value="alphabetizedInv">Inversed alphabet</option>
                    <option value="source">Source</option>
                </select>

                {sortStyle === "alphabetized" && (
                    <div className="background-container">
                        {apiData.count > 0 ? (

                            apiData.results.map((dat, index) => (
                                <MonsterComponent key={index} data={dat}/>
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
                                <MonsterComponent key={index} data={dat}/>
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
                                <MonsterComponent key={index} data={dat}/>
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

export default MonsterPage;

