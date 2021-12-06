import React from 'react';
import NavigationLink from "./NavigationLink";
import PrivateNavigation from "./PrivateNavigation";

const Navigation = ({isAuthenticated, toggleIsAuthenticated}) => {
    return (
        <nav>
        <ul className="navigation">
            <NavigationLink link="/" activeClass="active-link">Home</NavigationLink>

            { isAuthenticated ?  <PrivateNavigation toggleIsAuthenticated={toggleIsAuthenticated} isAuthenticated={isAuthenticated} />
                :  <NavigationLink link="/login" activeClass="active-link">Login</NavigationLink>
            }



        </ul></nav>
    );
};
export default Navigation;