import React, {useState} from 'react';

function TextInput(props) {

    // const [value, setValue] = useState('');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    //     console.log('handle input change detected');
    // }

    return(
        <input name={props.name} value={props.value} onChange={props.onChange} type="text" placeholder={props.holder} required>
        </input>
    );
}

export default TextInput;