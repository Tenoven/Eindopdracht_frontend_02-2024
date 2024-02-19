import {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";

function ClassesPage() {

    let apiData = {}

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/classes/?format=json");
                console.log(response.data.results)
                apiData = response.data.results
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
        <main>
            <p>Classespage</p>
        </main>
        </BasicDragonBackground>
    );
}

export default ClassesPage;