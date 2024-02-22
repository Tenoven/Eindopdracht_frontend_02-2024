//////// imports: ////////
import React, {useState} from 'react';
import "./characterCreator.css"
import StatBlock from "../../components/statBlock/statBlock.jsx";
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import {statCalculator} from "../../Helpers/stat-roller/statDiceRoller.js";
import MainButton from "../../components/buttons/mainButton/mainButton.jsx";

//////// main function: ////////
function CharacterCreator() {

    //////// use states: ////////
    const [chosenStatType, setChosenStatType] = useState("")
    const [formState, setFormstate] =useState({
        STR: "",
        DEX: "",
        CON: "",
        WIS: "",
        INT: "",
        CHA: "",
    })

    let statArray = []


    //////// functions: ////////
    const generateStats = () => {
        // Use a for loop to generate stats and push them into the statArray
        statArray= []
        for (let i = 0; i < 6; i++) {
            statArray.push(statCalculator());
        }

        console.log(statArray)
    };

    const handleOptionChange = (event) => {
        setChosenStatType(event.target.value);
    };

    function handleChange(event){
        const changedFieldName = event.target.name

        setFormstate( formState => ({
            ...formState,
            [changedFieldName]: event.target.value,
        }))
    }

    //////// return: ////////
    return (
        <>
            <BasicDragonBackground>
                <main className="creatorBody">
                    <h1>Character creator</h1>
                    <article className="statBox">
                        <h2 className="boxTitle">Choose your stat generator:</h2>
                        <form className="radios">
                            <div>
                                <input type="radio" id="standardArray" value="standardArray" checked={chosenStatType === "standardArray"} onChange={handleOptionChange} />
                                <label htmlFor="standardArray">Standard array</label>
                            </div>

                            <div>
                                <input type="radio" id="pointBuy" value="pointBuy" checked={chosenStatType === "pointBuy"} onChange={handleOptionChange}/>
                                <label htmlFor="pointBuy">Point buy</label>
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
                                <StatBlock generation={chosenStatType} stat="STR" onChange={handleChange} value={formState.STR}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="DEX" onChange={handleChange} value={formState.DEX}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CON" onChange={handleChange} value={formState.CON}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="WIS" onChange={handleChange} value={formState.WIS}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="INT" onChange={handleChange} value={formState.INT}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CHA" onChange={handleChange} value={formState.CHA}></StatBlock>
                            </form>
                                {chosenStatType === "manualDigi" && (
                                    <MainButton onClick={generateStats} buttonName="Generate stats"></MainButton>
                                )}
                        </section>
                    </article>
                    <button type="button" onClick={() => console.log(formState)}>test</button>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default CharacterCreator;