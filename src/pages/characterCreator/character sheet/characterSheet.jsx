import StatBlock from "../../../components/statBlock/statBlock.jsx";
import "./CharacterSheet.css"
import statTooModifier from "../../../../src/Helpers/statTooModifier.js";
import LocalToStateObject from "../../../Helpers/LocalToStateObject.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";


function CharacterSheet() {
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    const username = decoded.sub
    const [oldInfo, setOldInfo] = useState([])
    // const [newInfo, setNewInfo] = useState([])
    const formState= LocalToStateObject()
    // console.log(formState)
    // console.log("decoded:" +jwtDecode(token))

    useEffect(() => {
        void apiGetInfo()
    }, []);

    useEffect(() => {
        void postToApi()
    }, [formState]);


    async function apiGetInfo() {
        try {
            const response = await axios.get(`https://api.datavortex.nl/fiveecenter/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            })
            setOldInfo (JSON.parse(response.data.info) )
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function postToApi() {
        try {
            const result = await axios.put(`https://api.datavortex.nl/fiveecenter/users/${username}`, {
                "info": JSON.stringify(formState)
            },{
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(result)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (

            <div className="emptyBackground">
                <button type="button" onClick={apiGetInfo}>test info</button>
                <h1 className="excludePrint">Dungeons & Dragons Character Sheet</h1>
                <div className="printBackground">

                    <fieldset className="characterDetails">
                        <h2>Character details:</h2>
                        <div className="flexWrap">
                            <p><b>Name:</b> {JSON.parse(localStorage.getItem("name"))}</p>
                            <p><b>Age:</b> {JSON.parse(localStorage.getItem("age"))}</p>
                            <p><b>Height:</b> {JSON.parse(localStorage.getItem("height"))}</p>
                            <p><b>Weight:</b> {JSON.parse(localStorage.getItem("weight"))}</p>
                            <p><b>Eye colour:</b> {JSON.parse(localStorage.getItem("eyeColour"))}</p>
                            <p><b>Skin Colour:</b> {JSON.parse(localStorage.getItem("skinColour"))}</p>
                            <p><b>Hair colour:</b> {JSON.parse(localStorage.getItem("hairColour"))}</p>
                        </div>
                    </fieldset>
                    <fieldset className="skillStat">
                        <div className="stats">
                            <h2>Stats:</h2>
                            <StatBlock generation="filled" stat="STR" value={JSON.parse(localStorage.getItem("STR"))} standardArray={[]} statArray={[]}></StatBlock>
                            <StatBlock generation="filled" stat="DEX" value={JSON.parse(localStorage.getItem("DEX"))} standardArray={[]} statArray={[]}></StatBlock>
                            <StatBlock generation="filled" stat="CON" value={JSON.parse(localStorage.getItem("CON"))} standardArray={[]} statArray={[]}></StatBlock>
                            <StatBlock generation="filled" stat="WIS" value={JSON.parse(localStorage.getItem("WIS"))} standardArray={[]} statArray={[]}></StatBlock>
                            <StatBlock generation="filled" stat="INT" value={JSON.parse(localStorage.getItem("INT"))} standardArray={[]} statArray={[]}></StatBlock>
                            <StatBlock generation="filled" stat="CHA" value={JSON.parse(localStorage.getItem("CHA"))} standardArray={[]} statArray={[]}></StatBlock>
                        </div>
                        <div className="skills">
                            <h2>Skills:</h2>

                            <div className="skill">
                                <label htmlFor="acrobatics">Acrobatics:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("DEX")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="animalHandling">Animal Handling:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="arcana">Arcana:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="athletics">Athletics:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("STR")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="deception">Deception:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("CHA")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="history">History:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="insight">Insight:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="intimidation">Intimidation:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("CHA")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="investigation">Investigation:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="medicine">Medicine:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="nature">Nature:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="perception">Perception:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="performance">Performance:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("CHA")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="persuasion">Persuasion:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("CHA")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="religion">Religion:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="sleightOfHand">Sleight of Hand:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("DEX")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="stealth">Stealth:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("DEX")))}</p>
                            </div>

                            <div className="skill">
                                <label htmlFor="survival">Survival:</label>
                                <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                            </div>
                        </div>
                    </fieldset>

                </div>
            </div>
    );
}

export default CharacterSheet;
