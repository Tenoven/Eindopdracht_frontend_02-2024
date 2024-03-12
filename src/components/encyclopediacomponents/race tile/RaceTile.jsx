import React, {useState} from 'react';
import "./RaceTile.css"
import ReactMarkdown from "react-markdown";
import Button from "../../buttons/button.jsx";

function RaceComponent(props) {

    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

    return (
        <div>
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>
                {showMore ? (
                    <>
                        <ReactMarkdown>{apiData.asi_desc}</ReactMarkdown>
                        <ReactMarkdown>{apiData.size}</ReactMarkdown>
                        <ReactMarkdown>{apiData.speed_desc}</ReactMarkdown>
                        <ReactMarkdown>{apiData.age}</ReactMarkdown>
                        <ReactMarkdown>{apiData.alignment}</ReactMarkdown>
                        <ReactMarkdown>{apiData.languages}</ReactMarkdown>
                        <ReactMarkdown>{apiData.desc}</ReactMarkdown>
                        <ReactMarkdown>{apiData.traits}</ReactMarkdown>
                        <ReactMarkdown>{apiData.vision}</ReactMarkdown>

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

export default RaceComponent;