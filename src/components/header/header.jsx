import React from 'react';
import "./header.css"
import NavButton from "../buttons/navButton/navButton.jsx";
import MainButton from "../buttons/mainButton/mainButton.jsx";
import loginPage from "../../pages/loginPage/loginPage.jsx";
import {NavLink} from "react-router-dom";

function Header() {
    const active =({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
    return (
        <>
            <header>
                <p>D&D 5E Centre</p>
                <nav>
                    <NavLink to="/encyclopedia" className={active} > Encyclopedia</NavLink>
                    {/*<NavButton buttonName={"Encyclopedia"} onClick={() => console.log("Encyclopedia")}> </NavButton>*/}
                    <p>|</p>
                    <NavLink to="/charactercreator" className={active} > Character creator</NavLink>
                    {/*<NavButton buttonName={"Character creator"} onClick={() => console.log("Character creator")} ></NavButton>*/}
                    <p>|</p>
                    <NavLink to="/" className={active} > Homepage </NavLink>
                    {/*<NavButton buttonName={"Home page"} onClick={() => console.log("Home page")}></NavButton>*/}
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