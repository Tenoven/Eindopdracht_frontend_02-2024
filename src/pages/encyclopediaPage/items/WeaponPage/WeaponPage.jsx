import {useEffect, useState} from 'react';
import axios from "axios";
import BasicDragonBackground from "../../../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./WeaponPage.css"
import Button from "../../../../components/buttons/button.jsx";
import ItemComponent from "../../../../components/encyclopediacomponents/ItemTile/ItemComponent.jsx";
import WeaponComponent from "../../../../components/encyclopediacomponents/ItemTile/weaponComponent.jsx";

function WeaponPage() {
    const [apiData, setApiData] = useState({})
    const [apiLink, setApiLink] = useState("https://api.open5e.com/v1/weapons/?format=json")

    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(apiLink);
                // console.log("on mount:", response.data)
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
                <h1>Weapons</h1>
                <div className="prevNextButtons">
                    {apiData.previous !== null && (
                        <Button onClick={setPrev} className="yellow" >Previous</Button>
                    )}

                    {apiData.next !== null && (
                        <Button onClick={setNext} className="yellow" >Next</Button>
                    )}
                </div>

                <div className="feat-container">
                    {/*{console.log("apidata in return", apiData)}*/}
                    {apiData.count > 0 ? (
                        apiData.results.map((dat, index) => (
                            <WeaponComponent key={index} data={dat}/>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}

                </div>
            </main>

        </BasicDragonBackground>
    );
}

export default WeaponPage;