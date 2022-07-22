import React from "react";

interface InputProps {
    type?: string;
    placeholder?: string;
    value: string | number;
}

const Input = ({type, placeholder, value}: InputProps) => {
    return (
        <input type={type} placeholder={placeholder} value={value}/>
    )
}

export default Input;