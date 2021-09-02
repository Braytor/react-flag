import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink className="navLink" exact to="/" activeClassName="nav-active">Accueil </NavLink>


            <NavLink className="navLink" exact to="a-propos" activeClassName="nav-active"> A propos</NavLink>

        </div>
    );
};

export default Navigation;
