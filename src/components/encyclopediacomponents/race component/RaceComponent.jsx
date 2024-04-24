///// imports /////

import {useContext, useState} from 'react';
import "./RaceComponent.css"
import ReactMarkdown from "react-markdown";
import Button from "../../buttons/button.jsx";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../../context/authContext/AuthContext.jsx";

///// main function /////
function RaceComponent(props) {

///// constants /////
    const [showMore, setShowMore] = useState(false);
    const apiData = props.data
    const button = props.button
    const navigate = useNavigate()
    const {isAuthenticated} = useContext(AuthContext)

///// functions /////
    function setLocalStorage() {
        localStorage.setItem("race" , JSON.stringify(apiData.name))
        navigate("/charactercreator")
    }

///// return /////
    return (
        <div>
            {button ? (
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

                        {isAuthenticated && ( <Button className="yellow" onClick={setLocalStorage}>Use in character sheet builder</Button>)}
                        <Button className="yellow" onClick={() => setShowMore(false)}>Show less</Button>
                    </>
                ) : (
                    <>
                        <Button className="yellow" onClick={() => setShowMore(true)}>Show more</Button>
                    </>
                )}
            </fieldset>
            ) : (
                <fieldset>
                    <h2>{apiData.name}</h2>
                    <ReactMarkdown>{apiData.asi_desc}</ReactMarkdown>
                    <ReactMarkdown>{apiData.size}</ReactMarkdown>
                    <ReactMarkdown>{apiData.speed_desc}</ReactMarkdown>
                    <ReactMarkdown>{apiData.age}</ReactMarkdown>
                    <ReactMarkdown>{apiData.alignment}</ReactMarkdown>
                    <ReactMarkdown>{apiData.languages}</ReactMarkdown>
                    <ReactMarkdown>{apiData.desc}</ReactMarkdown>
                    <ReactMarkdown>{apiData.traits}</ReactMarkdown>
                    <ReactMarkdown>{apiData.vision}</ReactMarkdown>
                </fieldset>
            )}
        </div>
    );
}

export default RaceComponent;