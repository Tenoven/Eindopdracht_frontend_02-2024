import {useEffect} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import Button from "../../../components/buttons/button.jsx";

function SpellPage() {
    let apiData = {}

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/spells/?format=json");
                console.log(response)
                apiData = response
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <BasicDragonBackground>
            <main>
                <p>spells page</p>
                <Button type="button" onClick={() => {
                    console.log(apiData)}}>
                    test
                </Button>
            </main>
        </BasicDragonBackground>
    );
}

export default SpellPage;