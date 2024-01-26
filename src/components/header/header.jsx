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
                    <p>|</p>
                    <NavLink to="/charactercreator" className={active} > Character creator</NavLink>
                    <p>|</p>
                    <NavLink to="/" className={active} > Homepage </NavLink>
                    <div className="loginButtons">
                        <NavLink to="/register" className={active} > Register</NavLink>
                        <NavLink to="/login" className={active}>Log in</NavLink>
                    </div>
                </nav>
            </header>
        </>

    );
}

export default Header;