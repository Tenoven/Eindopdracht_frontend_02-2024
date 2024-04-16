import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import MonsterComponent from "../../../components/encyclopediacomponents/monsterComponent/monsterComponent.jsx";
import Button from "../../../components/buttons/button.jsx";
import "./monsterPage.css"

function MonsterPage() {

    const [apiData, setApiData] = useState([])
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/monsters/?format=json")

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                // console.log(response.data)
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
            <main className="monster-container">
                <h1>Monster Bestiary</h1>

                <div className="prevNextButtons">
                    {apiData.previous !== null && (
                        <Button onClick={setPrev} className="yellow" >Previous</Button>
                    )}

                    {apiData.next !== null && (
                        <Button onClick={setNext} className="yellow" >Next</Button>
                    )}
                </div>

                <div className="background-container">
                    {apiData.count > 0 ? (

                        apiData.results.map((dat, index) => (
                            <MonsterComponent key={index} data={dat}/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>

                <div className="prevNextButtons">
                    {apiData.previous !== null && (
                        <Button onClick={setPrev} className="yellow" >Previous</Button>
                    )}

                    {apiData.next !== null && (
                        <Button onClick={setNext} className="yellow" >Next</Button>
                    )}
                </div>
            </main>
        </BasicDragonBackground>
    );
}

export default MonsterPage;

