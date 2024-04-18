import StatBlock from "../../../components/statBlock/statBlock.jsx";
import "./CharacterSheet.css"
import statTooModifier from "../../../../src/Helpers/statTooModifier.js";
import LocalToStateObject from "../../../Helpers/LocalToStateObject.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import BackgroundComponent
    from "../../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";
import ClassComponent from "../../../components/encyclopediacomponents/classComponents/ClassComponent.jsx";
import RaceComponent from "../../../components/encyclopediacomponents/race component/RaceComponent.jsx";


function CharacterSheet() {
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    const username = decoded.sub
    const [oldInfo, setOldInfo] = useState([])
    const formState= LocalToStateObject()
    const [backgroundData, setBackgroundData] = useState([]);
    const [apiClassData, setApiClassData] = useState([]);
    const [apiRaceData, setApiRaceData] = useState([]);

    useEffect(() => {
        void apiGetInfo()
    }, []);

    useEffect(() => {
        void postToApi()
    }, [formState]);

    useEffect(() => {
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
        void apiGetRaceInfo()
        void apiGetClassInfo()
        void apiGetInfo()
    }, [])

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
                <h1 className="excludePrint">Dungeons & Dragons Character Sheet</h1>
                <p className="excludePrint">to print, press Cntrl + p </p>
                <section className="printBackground pageBreakAfter">

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
                    <div className="flexRow">
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
                            <div className="savingThrows">
                                <h2>Saving throws:</h2>
                                <div className="savingThrow">
                                    <label htmlFor="Strength">Strength save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("STR")))}</p>
                                </div>
                                <div className="savingThrow">
                                    <label htmlFor="Dexterity">Dexterity save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("DEX")))}</p>
                                </div>
                                <div className="savingThrow">
                                    <label htmlFor="Constitution">Constitution save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("CON")))}</p>
                                </div>
                                <div className="savingThrow">
                                    <label htmlFor="Intelligence">Intelligence save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("INT")))}</p>
                                </div>
                                <div className="savingThrow">
                                    <label htmlFor="Wisdom">Wisdom save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("WIS")))}</p>
                                </div>
                                <div className="savingThrow">
                                    <label htmlFor="Charisma">Charisma save:</label>
                                    <p>{statTooModifier(JSON.parse(localStorage.getItem("CHA")))}</p>
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
                        localStorage.getItem("class") && Object.keys(apiClassData).length > 0 &&
                    <ClassComponent data={apiClassData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("class"))))[0]}/>
                    }
                </section>

                <section className="printBackground pageBreakAfter">
                    {
                    localStorage.getItem("background") && Object.keys(backgroundData).length > 0 &&
                    <BackgroundComponent data={backgroundData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("background"))))[0]}/>
                    }
                </section>

                <section className="printBackground pageBreakAfter">
                    {
                        localStorage.getItem("race") && Object.keys(apiRaceData).length > 0 &&
                        <RaceComponent data={apiRaceData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("race"))))[0]}/>
                    }
                </section>
            </div>
    );
}

export default CharacterSheet;
