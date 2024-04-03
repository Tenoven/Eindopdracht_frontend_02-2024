//////// imports: ////////
import {useState} from 'react';
import "./characterCreator.css"
import StatBlock from "../../components/statBlock/statBlock.jsx";
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import {statCalculator} from "../../Helpers/stat-roller/statDiceRoller.js";
import Button from "../../components/buttons/button.jsx";

//////// main function: ////////
function CharacterCreator() {

    //////// use states & constants: ////////
    const [chosenStatType, setChosenStatType] = useState(null)
    const [statArray, setStatArray] = useState([])
    const [buttonState, setButtonState] = useState(false)

    const [formState, setFormstate] =useState({
        STR: "",
        DEX: "",
        CON: "",
        WIS: "",
        INT: "",
        CHA: "",
    })

    // let statArray = []
    let standardArray = [15, 14, 13, 12, 10, 8]
    let usedNumbers = []

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

    function handleChange(event){
        const changedFieldName = event.target.name
        console.log(event.target.name)

        console.log(event.target.value)

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
                                <StatBlock generation={chosenStatType} stat="STR" onChange={handleChange} value={formState.STR} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="DEX" onChange={handleChange} value={formState.DEX} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CON" onChange={handleChange} value={formState.CON} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="WIS" onChange={handleChange} value={formState.WIS} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="INT" onChange={handleChange} value={formState.INT} standardArray={standardArray} statArray={statArray}></StatBlock>
                                <StatBlock generation={chosenStatType} stat="CHA" onChange={handleChange} value={formState.CHA} standardArray={standardArray} statArray={statArray}></StatBlock>
                            </form>
                        </section>
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
                    </article>
                    <button type="button" onClick={() => console.log(formState)}>test</button>
                </main>
            </BasicDragonBackground>
        </>
    );
}

export default CharacterCreator;