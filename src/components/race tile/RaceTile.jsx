import React, {useState} from 'react';
import "./RaceTile.css"
import ReactMarkdown from "react-markdown";

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

                        <button onClick={() => setShowMore(false)}>Show less</button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setShowMore(true)}>Show more</button>
                    </>
                )}
            </fieldset>
        </div>
    );
}

export default RaceComponent;