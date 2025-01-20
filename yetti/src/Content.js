// src/Content.js  
import React, { Component } from 'react';  

class Content extends Component {  
    constructor(props) {  
        super(props);  
        this.state = {  
            content: 'This is the initial content of the page.'  
        };  
    }  

    updateContent = () => {  
        this.setState({  
            content: 'The content has been updated!'  
        });  
    }  

    render() {  
        return (  
            <div>  
                <p>{this.state.content}</p>  
                <button onClick={this.updateContent}>Update Content</button>  
            </div>  
        );  
    }  
}  

export default Content;