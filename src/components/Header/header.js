import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoNo/logo full black.png"
import "./header.css"

function Header () {
    return (
        <header className="header">
            <img src={logo} alt="Logo Noémie" className="logo" />
            <nav className="nav">
                <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : "" } >
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : "" } >
                    À Propos
                </NavLink>
                <NavLink to="/transfo-avis" className={({ isActive }) => isActive ? "active-link" : "" } >
                    Transformations/Avis
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : "" } >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
