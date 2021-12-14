import { useEffect , useState } from "react";
import Counter from "./Counter.js";

function CounterGroup(props)
{
    const [counterSize , setCounterSize] = useState([]);

    useEffect( () => 
    {
        const tempCounter = Array(parseInt(props.counterSize)).fill(Date.now());
        setCounterSize(tempCounter);
    }
        , [props.counterSize]);

    return(
        <div>
            {counterSize.map( (item , index) => (
                <Counter key={item+index}></Counter>
            ))}
        </div>
    );
}

export default CounterGroup;