import React from 'react';
import NavigationLink from "./NavigationLink";
import Button from "./Button";

const PrivateNavigation = ({isAuthenticated, toggleIsAuthenticated}) => {
    return (
        <>
            <NavigationLink link="/blog" activeClass="active-link">Blog overzicht</NavigationLink>
            <li>
                <Button
                    type="button"
                    text="Uitloggen"
                    onClick={toggleIsAuthenticated}
                    vallue={false}
                    target="/"
                    state={isAuthenticated}
                />
            </li>
        </>
    );
};

export default PrivateNavigation;