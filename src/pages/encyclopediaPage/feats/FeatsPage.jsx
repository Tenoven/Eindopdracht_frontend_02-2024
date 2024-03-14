import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import FeatComponent from "../../../components/encyclopediacomponents/featComponent/featComponent.jsx";
import "./FeatsPage.css"
import Button from "../../../components/buttons/button.jsx";

function FeatsPage() {

    const [apiData, setApiData] = useState({})
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/feats/?format=json")

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                console.log("on mount:", response.data)
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
            <main className="featPage">
                <h1>Feats</h1>
                <div className="prevNextButtons">
                    {apiData.previous !== null && (
                        <Button onClick={setPrev} className="yellow" >Previous</Button>
                    )}

                    {apiData.next !== null && (
                        <Button onClick={setNext} className="yellow" >Next</Button>
                    )}
                </div>

                <div className="feat-container">
                    {console.log("apidata in return", apiData)}
                    {apiData.count > 0 ? (
                        apiData.results.map((dat, index) => (
                            <FeatComponent key={index} data={dat}/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </main>
        </BasicDragonBackground>
    );
}

export default FeatsPage;