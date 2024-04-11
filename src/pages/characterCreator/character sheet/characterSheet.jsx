import StatBlock from "../../../components/statBlock/statBlock.jsx";
import "./CharacterSheet.css"
import statTooModifier from "../../../../src/Helpers/statTooModifier.js";


function CharacterSheet() {
    return (
            <div className="emptyBackground">
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
