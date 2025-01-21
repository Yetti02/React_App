//  import React, { Component } from 'react';  

// class Content extends Component {  
//     constructor(props) {  
//         super(props);  
//         this.state = {  
//             content: 'This is the initial page content.'  
//         };  
//     }  

//     updateContent = () => {  
//         this.setState({  
//             content: 'The content has been updated!'  
//         });  
//     }  

//     render() {  
//         return (  
//             <div className='container'>  
//                 <p>{this.state.content}</p>  
//                 <button onClick={this.updateContent}>Updated Content</button>  
//             </div>  
//         );  
//     }  
// }  

// export default Content;


  
import React, { useState } from 'react';  

const Content = () => {  
    const [items, setItems] = useState([]);    
    const [inputValue, setInputValue] = useState('');  

    const handleChange = (event) => {  
        setInputValue(event.target.value);   
    };  

    const addItem = () => {  
        if (inputValue.trim()) {  
            setItems([...items, inputValue]);   
            setInputValue(''); 
        }  
    };  

    return (  
        <div>  
            <h3 className='contain'>Manage Items</h3>  
            <input   
                type="text"   
                value={inputValue}   
                onChange={handleChange}   
                placeholder="Add an item"  
            />  
            <div className='contain'>
            <button onClick={addItem}>Add Item</button>  
            </div>
            <ul>  
                {items.map((item, index) => (  
                    <li key={index}>{item}</li>   
                ))}  
            </ul>  
        </div>  
    );  
};  

export default Content;
