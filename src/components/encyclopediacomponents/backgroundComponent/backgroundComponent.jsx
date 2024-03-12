import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import "./backgroundComponent.css"
import Button from "../../buttons/button.jsx";

function BackgroundComponent(props) {

    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

    return (
        <div className="backGroundCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>
                {showMore ? (
                    <>
                        <h3>Description:</h3>
                        <ReactMarkdown>{apiData.desc}</ReactMarkdown>
                        <h3>Proficiencies:</h3>
                        <ReactMarkdown>{apiData.skill_proficiencies}</ReactMarkdown>
                        <h3>Equipment:</h3>
                        <ReactMarkdown>{apiData.equipment}</ReactMarkdown>
                        <h3>Features:</h3>
                        <ReactMarkdown>{apiData.feature}</ReactMarkdown>
                        <ReactMarkdown>{apiData.feature_desc}</ReactMarkdown>
                        <h3>Languages:</h3>
                        <ReactMarkdown>{apiData.languages}</ReactMarkdown>
                        <h3>suggested characteristics</h3>
                        <ReactMarkdown>{apiData.suggested_characteristics}</ReactMarkdown>

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

export default BackgroundComponent;