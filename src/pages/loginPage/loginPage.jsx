import React, {useContext, useState} from 'react';
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./loginPage.css"
import Button from "../../components/buttons/button.jsx";
import axios from "axios";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";

function LoginPage(props) {

    ///// variabelen /////
    const [loginState, setLoginState] = useState({
        userName: "",
        passWord: "",
    })
    const {loginRequest} = useContext(AuthContext)
    const [error, setError] = useState(false)

    ///// functies /////

    function handleChange(event){
        const changedFieldName = event.target.name

        setLoginState( loginState => ({
            ...loginState,
            [changedFieldName]: event.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        void postLogIn()
    }

    async function postLogIn() {
        // console.log(loginState)
        try {
            const response = await axios.post(
                `https://api.datavortex.nl/fiveecenter/users/authenticate`, {
                    "username": loginState.userName,
                    "password": loginState.passWord,
                })
            // console.log(response.data);
            loginRequest(response.data.jwt, loginState.userName);

        } catch (e) {
            console.error(e)
            setError(true)
        }
    }


    return (
        <>
            <BasicDragonBackground>
                <section className="loginForm">
                    <div>
                        <h1>Login</h1>
                        <p>Welcome! Please log in</p>
                    </div>


                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="">Username:</label>
                            <input type="text" onChange={handleChange} name="userName"/>
                        </div>

                        <div>
                            <label htmlFor="">Password:</label>
                            <input type="password" onChange={handleChange} name="passWord"/>
                        </div>

                        <Button type="submit" className="yellow" >Submit login</Button>

                        {error && (
                            <>
                                <p className={"yellow"}>Login went wrong, please try again!</p>
                            </>
                        )}
                    </form>

                </section>
            </BasicDragonBackground>
        </>
    );
}

export default LoginPage;