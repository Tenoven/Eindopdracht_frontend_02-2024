import StatBlock from "../../../components/statBlock/statBlock.jsx";
import "./ProfileCharacterSheet.css";
import statTooModifier from "../../../../src/Helpers/statTooModifier.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function ProfileCharacterSheet() {

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const username = decoded.sub;
    const [characterInfo, setCharacterInfo] = useState([]);

    useEffect(() => {
        void apiGetInfo();
    }, []);

    async function apiGetInfo() {
        try {
            const response = await axios.get(`https://api.datavortex.nl/fiveecenter/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setCharacterInfo(JSON.parse(response.data.info));
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
                        <p><b>Name:</b> {characterInfo.name}</p>
                        <p><b>Age:</b> {characterInfo.age}</p>
                        <p><b>Height:</b> {characterInfo.height}</p>
                        <p><b>Weight:</b> {characterInfo.weight}</p>
                        <p><b>Eye colour:</b> {characterInfo.eyeColour}</p>
                        <p><b>Skin Colour:</b> {characterInfo.skinColour}</p>
                        <p><b>Hair colour:</b> {characterInfo.hairColour}</p>
                    </div>
                </fieldset>
                <fieldset className="skillStat">
                    <div className="stats">
                        <h2>Stats:</h2>
                        <StatBlock generation="filled" stat="STR" value={characterInfo.STR} standardArray={[]} statArray={[]}></StatBlock>
                        <StatBlock generation="filled" stat="DEX" value={characterInfo.DEX} standardArray={[]} statArray={[]}></StatBlock>
                        <StatBlock generation="filled" stat="CON" value={characterInfo.CON} standardArray={[]} statArray={[]}></StatBlock>
                        <StatBlock generation="filled" stat="WIS" value={characterInfo.WIS} standardArray={[]} statArray={[]}></StatBlock>
                        <StatBlock generation="filled" stat="INT" value={characterInfo.INT} standardArray={[]} statArray={[]}></StatBlock>
                        <StatBlock generation="filled" stat="CHA" value={characterInfo.CHA} standardArray={[]} statArray={[]}></StatBlock>
                    </div>
                    <div className="skills">
                        <h2>Skills:</h2>

                        <div className="skill">
                            <label htmlFor="acrobatics">Acrobatics:</label>
                            <p>{statTooModifier(characterInfo.DEX)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="animalHandling">Animal Handling:</label>
                            <p>{statTooModifier(characterInfo.WIS)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="arcana">Arcana:</label>
                            <p>{statTooModifier(characterInfo.INT)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="athletics">Athletics:</label>
                            <p>{statTooModifier(characterInfo.STR)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="deception">Deception:</label>
                            <p>{statTooModifier(characterInfo.CHA)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="history">History:</label>
                            <p>{statTooModifier(characterInfo.INT)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="insight">Insight:</label>
                            <p>{statTooModifier(characterInfo.WIS)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="intimidation">Intimidation:</label>
                            <p>{statTooModifier(characterInfo.CHA)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="investigation">Investigation:</label>
                            <p>{statTooModifier(characterInfo.INT)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="medicine">Medicine:</label>
                            <p>{statTooModifier(characterInfo.WIS)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="nature">Nature:</label>
                            <p>{statTooModifier(characterInfo.INT)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="perception">Perception:</label>
                            <p>{statTooModifier(characterInfo.WIS)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="performance">Performance:</label>
                            <p>{statTooModifier(characterInfo.CHA)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="persuasion">Persuasion:</label>
                            <p>{statTooModifier(characterInfo.CHA)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="religion">Religion:</label>
                            <p>{statTooModifier(characterInfo.INT)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="sleightOfHand">Sleight of Hand:</label>
                            <p>{statTooModifier(characterInfo.DEX)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="stealth">Stealth:</label>
                            <p>{statTooModifier(characterInfo.DEX)}</p>
                        </div>

                        <div className="skill">
                            <label htmlFor="survival">Survival:</label>
                            <p>{statTooModifier(characterInfo.WIS)}</p>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
}

export default ProfileCharacterSheet;
