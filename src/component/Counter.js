import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { UPDATE_SUM } from '../constant/constant';
 
function Counter(props)
{
    const [value , setValue] = useState(0);
    const dispatch = useDispatch()

    function decrease()
    {
        setValue(value - 1);
        dispatch({type:UPDATE_SUM , payload:-1});
    }
    function increase()
    {
        setValue(value + 1);
        dispatch({type:UPDATE_SUM , payload:1});
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