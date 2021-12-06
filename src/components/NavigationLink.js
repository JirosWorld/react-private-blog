import React from 'react';
import {NavLink} from "react-router-dom";

const NavigationLink = ({children, link, activeClass, id}) => {
    return (
        <li key={id}>
            <NavLink exact to={link} activeClassName={activeClass} className="navigation-link">
                {children}
            </NavLink>
        </li>
    );
};

export default NavigationLink;