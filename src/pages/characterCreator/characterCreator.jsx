//////// imports: ////////
import {useEffect, useState} from 'react';
import "./characterCreator.css"
import StatBlock from "../../components/statBlock/statBlock.jsx";
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import {statCalculator} from "../../Helpers/stat-roller/statDiceRoller.js";
import Button from "../../components/buttons/button.jsx";
import axios from "axios";
import RaceComponent from "../../components/encyclopediacomponents/race tile/RaceTile.jsx";
import ClassComponent from "../../components/encyclopediacomponents/classComponents/ClassComponent.jsx";
import BackgroundComponent from "../../components/encyclopediacomponents/backgroundComponent/backgroundComponent.jsx";
import {ClearCharacterForm} from "../../Helpers/ClearCharacterForm.js";
import {NavLink} from "react-router-dom";

//////// main function: ////////
function CharacterCreator() {

    //////// use states & constants: ////////
    const [apiRaceData, setApiRaceData] = useState([]);
    const [apiClassData, setApiClassData] = useState([]);
    const [apiBackgroundData, setApiBackgroundData] = useState([]);
    const [chosenStatType, setChosenStatType] = useState("filled")
    const [statArray, setStatArray] = useState([])
    const [buttonState, setButtonState] = useState(false)

    const [formState, setFormstate] =useState({
        name: "",
        age: "",
        height: "",
        weight: "",
        eyeColour: "",
        skinColour: "",
        hairColour: "",
        STR: "",
        DEX: "",
        CON: "",
        WIS: "",
        INT: "",
        CHA: "",
        race: "",
        class: "",
        background: "",


    })

    let standardArray = [15, 14, 13, 12, 10, 8]

    //////// Api Calls ////////
       useEffect(() => {
           apiGetRaceInfo()
           apiGetClassInfo()
           apiGetBackgroundInfo()
       }, [])

        async function apiGetRaceInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/races/?format=json");
                console.log("race", response.data.results)
                setApiRaceData(response.data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        async function apiGetClassInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/classes/?format=json");
                console.log("class", response.data.results)
                setApiClassData(response.data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        async function apiGetBackgroundInfo() {
            try {
                const response = await axios.get("https://api.open5e.com/v1/backgrounds/?format=json");
                console.log('background', response.data.results)
                setApiBackgroundData(response.data.results);
            } catch (error) {
                console.error('Error:', error);
            }
        }


    //////// functions: ////////

    const generateStats = () => {
        const newStatArray = [];
        for (let i = 0; i < 6; i++) {
            newStatArray.push(statCalculator());
        }
        setStatArray(newStatArray);
        setButtonState(true)
    };

    const handleOptionChange = (event) => {
        setChosenStatType(event.target.value);
    };

    function handleChange(event) {
        const changedFieldName = event.target.name;
        const newValue = event.target.value;
        setFormstate( formState => ({
            ...formState,
            [changedFieldName]: event.target.value,
        }))

        localStorage.setItem(changedFieldName, JSON.stringify(newValue));

    }

    //////// return: ////////
    return (
        <>
            <BasicDragonBackground>
                <main className="creatorBody">
                    <h1>Character creator</h1>
                    <article className="box">
                        <h2>General info:</h2>
                        <form className="box">
                            <div className="flexColumn">
                                <label htmlFor="">What is your characters name?</label>
                                <input type="text" onChange={handleChange} name="name" value={localStorage.getItem("name") ? JSON.parse(localStorage.getItem("name")): null } />
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What is your characters age?</label>
                                <input type="text" onChange={handleChange} name="age" value={localStorage.getItem("age") ? JSON.parse(localStorage.getItem("age")): null }/>
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What is your characters height?</label>
                                <input type="text" onChange={handleChange} name="height" value={localStorage.getItem("height") ? JSON.parse(localStorage.getItem("height")): null }/>
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What does your character weigh?</label>
                                <input type="text" onChange={handleChange} name="weight" value={localStorage.getItem("weight") ? JSON.parse(localStorage.getItem("weight")): null }/>
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What eye colour does your character have?</label>
                                <input type="text" onChange={handleChange} name="eyeColour" value={localStorage.getItem("eyeColour") ? JSON.parse(localStorage.getItem("eyeColour")): null }/>
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What skin colour does your character have?</label>
                                <input type="text" onChange={handleChange} name="skinColour" value={localStorage.getItem("skinColour") ? JSON.parse(localStorage.getItem("skinColour")): null }/>
                            </div>
                            <div className="flexColumn">
                                <label htmlFor="">What hair colour does your Character have?</label>
                                <input type="text" onChange={handleChange} name="hairColour" value={localStorage.getItem("hairColour") ? JSON.parse(localStorage.getItem("hairColour")): null }/>
                            </div>
                        </form>
                    </article>
                    <article className="box">
                        <h2 className="boxTitle">Choose your stat generator:</h2>
                        <form className="radios">
                            <div>
                                <input type="radio" id="standardArray" value="standardArray" checked={chosenStatType === "standardArray"} onChange={handleOptionChange} />
                                <label htmlFor="standardArray">Standard array</label>
                            </div>

                            <div>
                                <input type="radio" id="manualIrl" value="manualIrl" checked={chosenStatType === "manualIrl"} onChange={handleOptionChange}/>
                                <label htmlFor="manualIrl">Manual rolled (irl dice)</label>
                            </div>

                            <div>
                                <input type="radio" id="manualDigi" value="manualDigi" checked={chosenStatType === "manualDigi"} onChange={handleOptionChange}/>
                                <label htmlFor="manualDigi">Manual rolled (digi dice)</label>
                            </div>
                        </form>
                        <section >
                            <form className="statSection">
                                <StatBlock generation={chosenStatType} stat="STR" onChange={handleChange} value={localStorage.getItem("STR") ? JSON.parse(localStorage.getItem("STR")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="DEX" onChange={handleChange} value={localStorage.getItem("DEX") ? JSON.parse(localStorage.getItem("DEX")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CON" onChange={handleChange} value={localStorage.getItem("CON") ? JSON.parse(localStorage.getItem("CON")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="WIS" onChange={handleChange} value={localStorage.getItem("WIS") ? JSON.parse(localStorage.getItem("WIS")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="INT" onChange={handleChange} value={localStorage.getItem("INT") ? JSON.parse(localStorage.getItem("INT")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CHA" onChange={handleChange} value={localStorage.getItem("CHA") ? JSON.parse(localStorage.getItem("CHA")) : null} standardArray={standardArray} statArray={statArray}></StatBlock>
                            </form>
                        </section>
                        <section>
                            {chosenStatType === "manualDigi" && (
                                <div className="manualDigiExtra">
                                    <p>Make sure you use a stat only once!</p>
                                    <Button type="button" className="yellow" onClick={generateStats} disabled={buttonState}>generate stats</Button>
                                </div>
                            )}
                            {chosenStatType === "standardArray" && (
                                <div className="manualDigiExtra">
                                    <p>Make sure you use a stat only once!</p>
                                </div>
                            )}
                        </section>
                    </article>
                    <article className="box">
                        <h2>Choose your race:</h2>
                        <form action="">
                            <select name="race" onChange={handleChange}>
                                <option value=" ">--</option>
                                {apiRaceData.map((race, index) => {
                                    return (
                                        <option key={index} value={race.name}>{race.name}</option>
                                    )})}
                            </select>
                            {
                                localStorage.getItem("race") && Object.keys(apiRaceData).length > 0 &&
                                <RaceComponent data={apiRaceData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("race"))))[0]}/>
                            }
                        </form>
                    </article>
                    <article className="box">
                        <h2>Choose your Class:</h2>
                        <form action="">
                            <select name="class" onChange={handleChange}>
                                <option value=" ">--</option>
                                {apiClassData.map((clas, index) => {
                                    return (
                                        <option key={index} value={clas.name}>{clas.name}</option>
                                    )})}
                            </select>
                            {
                                localStorage.getItem("class") && Object.keys(apiClassData).length > 0 &&
                                <ClassComponent data={apiClassData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("class"))))[0]}/>
                            }
                        </form>
                    </article>
                    <article className="box">
                        <h2>Choose your background:</h2>
                        <form action="">
                            <select name="background" onChange={handleChange}>
                                <option value=" ">--</option>
                                {apiBackgroundData.map((background, index) => {
                                    return (
                                        <option key={index} value={background.name}>{background.name}</option>
                                    )})}
                            </select>
                            {
                                localStorage.getItem("background") && Object.keys(apiBackgroundData).length > 0 &&
                                <BackgroundComponent data={apiBackgroundData.filter(item => item.name.includes(JSON.parse(localStorage.getItem("background"))))[0]}/>
                            }
                        </form>
                    </article>
                    <article className="buttons">
                        <Button type="button" onClick={ClearCharacterForm} className="yellow">Clear form</Button>
                        <NavLink to="/charactercreator/charactersheet" className="navButton" > Create character</NavLink>
                    </article>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default CharacterCreator;