import React from 'react';
import "./header.css"
import NavButton from "../buttons/navButton/navButton.jsx";
import MainButton from "../buttons/mainButton/mainButton.jsx";
import loginPage from "../../pages/loginPage/loginPage.jsx";

function Header() {
    return (
        <>
            <header>
                <p>D&D 5E Centre</p>
                <nav>
                    <NavButton buttonName={"Encyclopedia"} onClick={() => console.log("Encyclopedia")}> </NavButton>
                    <p>|</p>
                    <NavButton buttonName={"Character creator"} onClick={() => console.log("Character creator")} ></NavButton>
                    <p>|</p>
                    <NavButton buttonName={"Home page"} onClick={() => console.log("Home page")}></NavButton>
                    <div className={"loginButtons"}>
                        <MainButton buttonName={"Register"} onClick={() => console.log("Register")}></MainButton>
                        <MainButton buttonName={"Log in"} onClick={() => console.log("Log in")}></MainButton>
                    </div>
                </nav>
            </header>
        </>

    );
}

export default Header;