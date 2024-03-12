import "./ClassComponent.css";
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Button from "../../buttons/button.jsx";

function ClassComponent(props) {
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

    return (
        <div className="classCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>
                {showMore ? (
                    <>
                        <h3>Hp:</h3>
                        <ReactMarkdown>{"Hp at level 1: "+apiData.hp_at_1st_level}</ReactMarkdown>
                        <ReactMarkdown>{"Hp at higher levels: "+apiData.hp_at_higher_levels}</ReactMarkdown>
                        <h3>Proficiencies:</h3>
                        <ReactMarkdown>{"Armor: "+apiData.prof_armor}</ReactMarkdown>
                        <ReactMarkdown>{"Weapons: "+apiData.prof_weapons}</ReactMarkdown>
                        <ReactMarkdown>{"Skills: "+apiData.prof_skills}</ReactMarkdown>
                        <ReactMarkdown>{"Tools: "+apiData.prof_tools}</ReactMarkdown>
                        <h3>Equipment:</h3>
                        <ReactMarkdown>{apiData.equipment}</ReactMarkdown>
                        <h3>Class Table:</h3>
                        <pre className="classTable">{apiData.table}</pre>
                        <h3>Class details:</h3>
                        <ReactMarkdown className="descriptionSection">{apiData.desc}</ReactMarkdown>
                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <>
                        <Button className="yellow" onClick={() => setShowMore(true)}>Show more</Button>
                    </>
                )}
            </fieldset>
        </div>
    );
}

export default ClassComponent;
