import React from 'react';
import Button from "../components/Button";

const Login = ({isAuthenticated , toggleIsAuthenticated}) => {


    return (
        <div className="login">
            <Button
                type="button"
                text="Login"
                onClick={toggleIsAuthenticated}
                vallue={true}
                target="/blog"
                state={isAuthenticated}
            />
        </div>
    );
};

export default Login;