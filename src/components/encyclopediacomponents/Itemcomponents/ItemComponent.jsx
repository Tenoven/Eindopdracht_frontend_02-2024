import {useState} from "react";
import ReactMarkdown from "react-markdown";
import Button from "../../buttons/button.jsx";

function ItemComponent(props) {

    const [showMore, setShowMore] = useState(false);
    const apiData = props.data

    return (
        <div className="magicCard">
            <fieldset className="boxes">
                <h2>{apiData.name}</h2>

                {showMore ? (
                    <>
                        <h3>{"Type: "+ apiData.type}</h3>
                        <h3>{"Rarity: "+ apiData.rarity}</h3>
                        {apiData.requires_attunement !== null && (
                            <ReactMarkdown>{apiData.requires_attunement}</ReactMarkdown>
                        )}
                        <ReactMarkdown>{apiData.desc}</ReactMarkdown>
                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <Button className="yellow"  onClick={() => setShowMore(true)}>Show more</Button>
                )}

            </fieldset>
        </div>
    );
}

export default ItemComponent