import React from 'react';

const validationComponent = ( props ) => {

    let validationText;
    if (props.inputLength < 5) {
        validationText = "Text too short";
    } else {
        validationText = "Text long enough"
    }

    return (
        <div className="ValidationComponent">
            <p>{validationText}</p>
        </div>
    )
}

export default validationComponent;