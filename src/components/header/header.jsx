import "./header.css"
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