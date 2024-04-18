import React, {useContext, useState} from 'react';
import ReactMarkdown from "react-markdown";
import "./backgroundComponent.css"
import Button from "../../buttons/button.jsx";
import {useNavigate} from "react-router-dom";
import  {AuthContext} from "../../../context/authContext/AuthContext.jsx";

function BackgroundComponent(props) {

    const [showMore, setShowMore] = useState(false);
    const apiData = props.data
    const button = props.button
    const navigate = useNavigate()
    const {isAuthenticated} = useContext(AuthContext)

    function setLocalStorage() {
        localStorage.setItem("background" , JSON.stringify(apiData.name))
        navigate("/charactercreator")
    }
    return (
        <div className="backGroundCard">
            {button ? (
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
                </fieldset>
            )}
        </div>
    );
}

export default BackgroundComponent;