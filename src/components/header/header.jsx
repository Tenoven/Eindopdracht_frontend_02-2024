import "./header.css"
import {NavLink} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import Button from "../buttons/button.jsx";
import {AuthContext} from "../../context/authContext/AuthContext.jsx";

function Header() {
    const active =({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const {logOut} = useContext(AuthContext)

    useEffect(() => {
        console.log(logOut)
        const checkLoggedIn = () => {
            if (localStorage.getItem("token")) {
                setIsLoggedIn(true);
            }
        };

        checkLoggedIn(isLoggedIn);
    }, [isLoggedIn]);
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
                        localStorage.getItem("token") ? (
                            <div className="profileButtons">
                                <NavLink to="/profile" className={active}>Profile</NavLink>
                                <Button type="button" onClick={logOut}>LogOut</Button>
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