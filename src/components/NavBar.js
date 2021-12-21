import React from "react";
import "../styles/style.css"
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar-wrapper">
            <ul className="navbar-list">
                <li className={"navbar-list__item"}><Link to={"/"}>Home</Link></li>
                <li className={"navbar-list__item"}><Link to={"/admin"}>Admin</Link></li>
                <li className={"navbar-list__item"}><Link to={"/contacts"}>Contact</Link></li>
            </ul>
        </div>
    )
}


export default NavBar;
