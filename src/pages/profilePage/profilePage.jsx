///// imports /////
import {useEffect, useState} from 'react';
import "./profilePage.css"
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {NavLink} from "react-router-dom";

///// main function /////
function ProfilePage() {
///// constants /////
    const [userData, setUserData] = useState({})
    const [characterData, setCharacterData] = useState({})
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    const username = decoded.sub


///// functions /////
    useEffect(() => {
        async function apiGetInfo() {
            try {
                const response = await axios.get(`https://api.datavortex.nl/fiveecenter/users/${username}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
                })
                setUserData (response.data)
                setCharacterData( JSON.parse(response.data.info))
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])


///// return /////
    return (
        <>
            <BasicDragonBackground>
                <main className="mainVisual">
                    <section className="generalUserData">
                        <h2>Welcome {userData.username}</h2>
                        <p>The email adres known to us is: {userData.email}</p>
                    </section>

                    <section>
                        <h3>Your character:</h3>
                        {characterData ? (
                            <article className="characterProfileDetails">
                                <h3>{characterData.name}</h3>
                                <p>{characterData.race}</p>
                                <p>{characterData.class}</p>
                                <p>{characterData.background}</p>
                                <NavLink to={"/profile/charactersheet"} className="yellow">Go to character sheet</NavLink>
                            </article>
                        ) : (
                            <p>Find your character here when you have made one!</p>
                        )}
                    </section>

                </main>
            </BasicDragonBackground>
        </>
    );
}

export default ProfilePage;