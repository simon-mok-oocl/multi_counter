import CounterGroup from "./CounterGroup";
import SetCounterSize from "./SetCounterSize";

import { useSelector } from "react-redux";
import CounterGroupSum from "./CounterGroupSun";

function MultiCounter()
{
    const counterSize = useSelector(state => state.size);
    const sum = useSelector(state => state.sum);

    return(
        <div>
            <SetCounterSize></SetCounterSize>
            <CounterGroupSum sum={sum}></CounterGroupSum>
            <CounterGroup counterSize={counterSize}></CounterGroup>
        </div>
    );
}

export default MultiCounter;