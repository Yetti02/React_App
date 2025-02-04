// src/Header.js  
import React from 'react';  

const Header = (props) => {  
    return (  
        <header>  
            <h1>{props.title}</h1>  
            <h2>{props.subtitle}</h2>  
        </header>  
    );  
};  

export default Header;