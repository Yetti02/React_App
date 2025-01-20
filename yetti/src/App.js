// src/App.js  
import React from 'react';  
import Header from './Header';  
import Footer from './Footer';  
import Content from './Content';  

function App() {  
    return (  
        <div>  
            {/* Pass props to the Header component */}  
            <Header title="Welcome to My App" subtitle="This is a simple React app" />  

            {/* Add the Content component */}  
            <Content text="Created with react" />  

            {/* Pass props to the Footer component */}  
            <Footer text="© 2025 My App. All rights reserved." />  
        </div>  
    );  
}  

export default App;