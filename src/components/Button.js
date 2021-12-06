import React from 'react';
import {useHistory} from "react-router-dom";

const Button = ({type,text,onClick,vallue,target,state}) => {

    const history = useHistory();

    function handleClick() {

        onClick(vallue);

        history.push(target);
    }

    return (

        <button type={type} onClick={handleClick}>{text}</button>

    );
};

export default Button;