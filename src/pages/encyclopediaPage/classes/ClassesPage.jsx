import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./ClassesPage.css"
import ClassComponent from "../../../components/encyclopediacomponents/classComponents/ClassComponent.jsx";

function ClassesPage() {

    const [apiData, setApiData] = useState([]);


    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/classes/?format=json");
                console.log("apiData in fetch",response.data.results)
                setApiData(response.data.results)
            } catch (error) {
                console.error('Error:', error);}
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main >
                <h1>Classes</h1>
                <div className="classes-container">
                    {console.log("apidata in return", apiData)}
                    {apiData.length > 0 ? (
                        apiData.map((dat, index) => (
                                <ClassComponent key={index} data={dat}/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </main>
        </BasicDragonBackground>
    );
}

export default ClassesPage;