///// imports /////
import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./ArmorPage.css"
import ArmorComponent from "../../../../components/encyclopediacomponents/Itemcomponents/armorComponent.jsx";
import sortBySource from "../../../../Helpers/sorters/SortBySource.js";
import alphabetizeInverseArray from "../../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";

///// main function /////
function ArmorPage() {
///// constants /////
    const [apiData, setApiData] = useState({})
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/armor/?format=json")
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")


///// functions /////
    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                setApiData(response.data)
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [apiLink])

///// return /////
    return (
        <BasicDragonBackground>
            <main>
                <select name="sort"  onChange={(event) => setSortStyle(event.target.value)}>
                    <option value="alphabetized" selected>Alphabetized</option>
                    <option value="alphabetizedInv">Inversed alphabet</option>
                    <option value="source">Source</option>
                </select>


                {sortStyle === "alphabetized" && (
                            <div className="feat-container">
                                {apiData.count > 0 ? (
                                    apiData.results.map((dat, index) => (
                                        <ArmorComponent key={index} data={dat}/>
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
                                <ArmorComponent key={index} data={dat}/>
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
                                <ArmorComponent key={index} data={dat}/>
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
export default ArmorPage;