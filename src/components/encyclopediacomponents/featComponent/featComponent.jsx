///// imports /////
import {useState} from 'react';
import ReactMarkdown from "react-markdown";
import Button from "../../buttons/button.jsx";

///// main function /////
function FeatComponent(props) {
///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

///// functions /////

///// return /////
    return (
        <div className="featCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>

                {showMore ? (
                    <>
                        {apiData.prerequisite !== null && (
                            <ReactMarkdown>{apiData.prerequisite}</ReactMarkdown>
                        )}
                        <ReactMarkdown>{apiData.desc}</ReactMarkdown>
                        {apiData.effects_desc.map((effect, index) => (
                            <ReactMarkdown key={index}>{effect}</ReactMarkdown>
                        ))}
                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <Button className="yellow"  onClick={() => setShowMore(true)}>Show more</Button>
                )}

            </fieldset>
        </div>
    );
}

export default FeatComponent;