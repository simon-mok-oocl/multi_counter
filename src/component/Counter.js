import { useState } from 'react';
 
function Counter(props)
{
    const [value , setValue] = useState(0);

    function decrease()
    {
        setValue(value - 1);
    }
    function increase()
    {
        setValue(value + 1);
    }

    return(
        <div>
            <input type="button" value="-" onClick={ decrease }></input>
            <span>{ value }</span>
            <input type="button" value="+" onClick={ increase }></input>
        </div>
    );
}

export default Counter; 