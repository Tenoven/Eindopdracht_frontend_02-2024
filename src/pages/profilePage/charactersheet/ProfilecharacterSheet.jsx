import StatBlock from "../../../components/statBlock/statBlock.jsx";
import statTooModifier from "../../../../src/Helpers/statTooModifier.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import ClassComponent from "../../../components/encyclopediacomponents/classComponents/ClassComponent.jsx";
import BackgroundComponent
    from "../../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";
import RaceComponent from "../../../components/encyclopediacomponents/race component/RaceComponent.jsx";

function ProfileCharacterSheet() {

    const token = localStorage.getItem("token");
    const decoded = jwtDecode(token);
    const username = decoded.sub;
    const [characterInfo, setCharacterInfo] = useState([]);
    const [backgroundData, setBackgroundData] = useState([]);
    const [apiClassData, setApiClassData] = useState([]);
    const [apiRaceData, setApiRaceData] = useState([]);

        useEffect(() => {
            void apiGetRaceInfo()
            void apiGetClassInfo()
            void apiCharacterInfo()
            void apiGetInfo();
        }, [])

    async function apiGetInfo() {
        try {
            const response = await axios.get("https://api.open5e.com/v1/backgrounds/?format=json");
            setBackgroundData (response.data.results)
        } catch (error) {
            console.error('Error:', error);
        }
    }
    async function apiGetClassInfo() {
        try {
            const response = await axios.get("https://api.open5e.com/v1/classes/?format=json");
            setApiClassData(response.data.results)
        } catch (error) {
            console.error('Error:', error);}
    }
    async function apiGetRaceInfo() {
        try {
            const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
            setApiRaceData(response.data.results)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    async function apiCharacterInfo() {
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
            <h1 className="excludePrint">Dungeons & Dragons Character Sheet</h1>
            <p className="excludePrint">to print, press Cntrl + p </p>
            <section className="printBackground pageBreakAfter">

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
                <div className="flexRow">
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
                        <div className="savingThrows">
                            <h2>Saving throws:</h2>
                            <div className="savingThrow">
                                <label htmlFor="Strength">Strength save:</label>
                                <p>{statTooModifier(characterInfo.STR)}</p>
                            </div>
                            <div className="savingThrow">
                                <label htmlFor="Dexterity">Dexterity save:</label>
                                <p>{statTooModifier(characterInfo.DEX)}</p>
                            </div>
                            <div className="savingThrow">
                                <label htmlFor="Constitution">Constitution save:</label>
                                <p>{statTooModifier(characterInfo.CON)}</p>
                            </div>
                            <div className="savingThrow">
                                <label htmlFor="Intelligence">Intelligence save:</label>
                                <p>{statTooModifier(characterInfo.INT)}</p>
                            </div>
                            <div className="savingThrow">
                                <label htmlFor="Wisdom">Wisdom save:</label>
                                <p>{statTooModifier(characterInfo.WIS)}</p>
                            </div>
                            <div className="savingThrow">
                                <label htmlFor="Charisma">Charisma save:</label>
                                <p>{statTooModifier(characterInfo.CHA)}</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="characterStats">
                        <fieldset className="characterStat">Hp:</fieldset>
                        <fieldset className="characterStat">Temp Hp:</fieldset>
                        <fieldset className="characterStat">Ac:</fieldset>
                        <fieldset className="characterStat">Initiative:</fieldset>
                        <fieldset className="characterStat">Speed:</fieldset>
                        <fieldset className="characterStat">Inspiration:</fieldset>
                    </fieldset>
                </div>
                <fieldset className="itemBox">
                    <h2>items:</h2>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                    <fieldset className="emptyFieldset"></fieldset>
                </fieldset>

            </section>

            <section className="printBackground pageBreakAfter">
                {
                    characterInfo.class && Object.keys(apiClassData).length > 0 &&
                    <ClassComponent data={apiClassData.filter(item => item.name.includes(characterInfo.class))[0]}/>
                }
            </section>

            <section className="printBackground pageBreakAfter">
                {
                    characterInfo.background && Object.keys(backgroundData).length > 0 &&
                    <BackgroundComponent data={backgroundData.filter(item => item.name.includes(characterInfo.background))[0]}/>
                }
            </section>

            <section className="printBackground pageBreakAfter">
                {
                    characterInfo.race && Object.keys(apiRaceData).length > 0 &&
                    <RaceComponent data={apiRaceData.filter(item => item.name.includes(characterInfo.race))[0]}/>
                }
            </section>
        </div>
    );
}

export default ProfileCharacterSheet;
