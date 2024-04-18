import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import BackgroundComponent from "../../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";
import "./BackgroundPage.css"

function BackgroundPage() {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/backgrounds/?format=json");
                setApiData (response.data.results)
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
                <div className="background-container">
                    {apiData.length > 0 ? (
                        apiData.map((dat, index) => (
                            <BackgroundComponent button="true" key={index} data={dat}/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </main>
        </BasicDragonBackground>
    );
}

export default BackgroundPage;