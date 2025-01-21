// src/App.js  
import React from 'react';  
import './App.css'; 
import Header from './Header';  
import Footer from './Footer';  
import Content from './Content';  

function App() {  
    return (  
        <div>  
           
            <Header title="Welcome to My App" subtitle="This is a simple React app" />  
 
            <Content text="Created with react" />  
  
            <Footer text="© 2025 My App. All rights reserved." />  
        </div>  
    );  
}  

export default App;