///// imports /////

import "./header.css"
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import Button from "../buttons/button.jsx";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";

///// main function /////
function Header() {
///// constants /////
    const active =({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
    const {logOut, isAuthenticated} = useContext(AuthContext)

///// functions /////

///// return /////
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
                                <NavLink to="/profile" className={`${active} position`}>Profile</NavLink>
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