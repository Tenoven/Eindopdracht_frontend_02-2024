import "./header.css"
import {NavLink} from "react-router-dom";
import {useContext, useEffect} from "react";
import Button from "../buttons/button.jsx";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";

function Header() {
    const active =({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
    const {logOut, isAuthenticated} = useContext(AuthContext)

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

                    {
                        isAuthenticated ? (
                            <div className="profileButtons">
                                <NavLink to="/user" className={`${active} position`}>Profile</NavLink>
                                <Button type="button" className="yellow" onClick={logOut}>LogOut</Button>
                            </div>
                        ) : (
                            <div className="loginButtons">
                                <NavLink to="/register" className={active}>Register</NavLink>
                                <NavLink to="/login" className={active}>Log in</NavLink>
                            </div>
                        )
                    }

                </nav>
            </header>
        </>

    );
}

export default Header;