///// imports /////
import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./WeaponPage.css"
import Button from "../../../../components/buttons/button.jsx";
import WeaponComponent from "../../../../components/encyclopediacomponents/Itemcomponents/weaponComponent.jsx";
import alphabetizeInverseArray from "../../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";
import sortBySource from "../../../../Helpers/sorters/SortBySource.js";

///// main function /////
function WeaponPage() {
///// constants /////
    const [apiData, setApiData] = useState({})
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/weapons/?format=json")
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")


///// functions /////
    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                console.log(response.data)
                setApiData(response.data)
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
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

///// return /////
    return (
        <BasicDragonBackground>
            <main>
                <h1>Weapons</h1>
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
                    <div className="feat-container">
                        {apiData.count > 0 ? (
                            apiData.results.map((dat, index) => (
                                <WeaponComponent key={index} data={dat}/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}

                {sortStyle === "alphabetizedInv" && (
                    <div className="feat-container">
                        {inverseApiData.length > 0 ? (
                            inverseApiData.map((dat, index) => (
                                <WeaponComponent key={index} data={dat}/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                    )}

                {sortStyle === "source" && (
                    <div className="feat-container">
                        {sortSource.length > 0 ? (
                            sortSource.map((dat, index) => (
                                <WeaponComponent key={index} data={dat}/>
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

export default WeaponPage;