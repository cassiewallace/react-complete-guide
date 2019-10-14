import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div>
            <input 
                type="text"
                placeholder={props.username}
                onChange={props.changed}
                class="UserInput">
            </input>
        </div>
)
}

export default userInput;