import React from 'react';
import BasicDragonBackground from "../../components/backgrounds/basicDragon/basicDragonBackground.jsx";
import "./loginPage.css"
import Button from "../../components/buttons/button.jsx";

function LoginPage(props) {
    return (
        <>
            <BasicDragonBackground>
                <div>
                    <h1>Login</h1>
                    <p>welcome! Please log in</p>
                </div>

                {/*<form onSubmit={}>*/}
                <form>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input type="email"/>
                    </div>
                    
                    <div>
                        <label htmlFor="">Password:</label>
                        <input type="password"/>
                    </div>
                    <Button type="submit" className="yellow" >Submit login</Button>
                </form>
            </BasicDragonBackground>
        </>
    );
}

export default LoginPage;