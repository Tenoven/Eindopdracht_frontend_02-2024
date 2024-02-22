import "./ClassComponent.css";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

function ClassComponent(props) {
    const [showMore, setShowMore] = useState(false);

    return (
        <div className="classCard">
            <fieldset className="boxes">
                <h2>{props.name}</h2>
                {showMore ? (
                    <>
                        <h3>Description:</h3>
                        <ReactMarkdown className="descriptionSection">{props.description}</ReactMarkdown>
                        <button onClick={() => setShowMore(false)}>Show less</button>
                    </>
                ) : (
                    <button onClick={() => setShowMore(true)}>Show more</button>
                )}
            </fieldset>
        </div>
    );
}

export default ClassComponent;
