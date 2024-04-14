import {useContext, useEffect, useState} from 'react';
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import axios from "axios";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";
import {jwtDecode} from "jwt-decode";

function ProfilePage() {
    const [userData, setUserData] = useState({})
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token)
    const username = decoded.sub

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
                console.log(response.data)
            } catch (error) {
                console.error('Error:', error);
            }
        }
        void apiGetInfo()
    }, [])

    return (
        <>
            <BasicDragonBackground>
                <section>
                    <h2>Welcome {userData.username}</h2>
                    <p>The email adres known to us is: {userData.email}</p>
                </section>

                <section>
                    <h3>Your characters:</h3>

                </section>

            </BasicDragonBackground>
        </>
    );
}

export default ProfilePage;