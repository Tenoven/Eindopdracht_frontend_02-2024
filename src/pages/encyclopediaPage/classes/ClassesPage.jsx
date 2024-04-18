import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./ClassesPage.css"
import ClassComponent from "../../../components/encyclopediacomponents/classComponents/ClassComponent.jsx";
import alphabetizeInverseArray from "../../../Helpers/sorters/encyclopediaSorterAlphabetized.js";
import sortBySource from "../../../Helpers/sorters/SortBySource.js";
import BackgroundComponent
    from "../../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";

function ClassesPage() {

    const [apiClassData, setApiClassData] = useState([]);
    const [inverseApiData, setInverseApiData] = useState([])
    const [sortSource, setSortSource] = useState([])
    const [sortStyle, setSortStyle] = useState("alphabetized")

    useEffect(() => {
        async function apiGetClassInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/classes/?format=json");
                setApiClassData(response.data.results)
                setInverseApiData(alphabetizeInverseArray(response.data.results))
                setSortSource(sortBySource(response.data.results))
            } catch (error) {
                console.error('Error:', error);}
        }
        void apiGetClassInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main >
                <h1>Classes</h1>
                <select name="sort"  onChange={(event) => setSortStyle(event.target.value)}>
                    <option value="alphabetized" selected>Alphabetized</option>
                    <option value="alphabetizedInv">Inversed alphabet</option>
                    <option value="source">Source</option>
                </select>

                {sortStyle === "alphabetized" && (
                <div className="classes-container">
                    {apiClassData.length > 0 ? (
                        apiClassData.map((dat, index) => (
                                <ClassComponent key={index} data={dat} button="true"/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                )}

                {sortStyle === "alphabetizedInv" && (
                    <div className="classes-container">
                        {inverseApiData.length > 0 ? (
                            inverseApiData.map((dat, index) => (
                                <ClassComponent key={index} data={dat} button="true"/>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>
                )}

                {sortStyle === "source" && (
                    <div className="classes-container">
                        {sortSource.length > 0 ? (
                            sortSource.map((dat, index) => (
                                <ClassComponent key={index} data={dat} button="true"/>
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

export default ClassesPage;