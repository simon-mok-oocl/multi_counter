import { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET_SUM, UPDATE_SIZE } from "../constant/constant";

function SetCounterSize(props)
{
    const [size , setSize] = useState();
    const dispatch = useDispatch();

    function handleSizeChange(event)
    {
        const sizeValue  = parseInt(event.target.value);
        setSize(sizeValue);
        dispatch({type: UPDATE_SIZE , payload: sizeValue });
        dispatch({type: RESET_SUM , payload: 0});
    }

    return(
        <div>
            Sum: <input type="number" onChange={ handleSizeChange } ></input>
        </div>
    );
}

export default SetCounterSize;