import React, {useState} from 'react'; 

function Input(){
    const [valueInput, setValueInput] = useState('');

    const handleValue = (e) => {
        setValueInput(e.target.value);
    }
    return(
        <div>
            <input type="text" onChange={handleValue}/>
            <button>Send</button>
            <p>{valueInput}</p>
        </div>
    )
}

export default Input;