import { RESET_SUM, UPDATE_SIZE, UPDATE_SUM } from "../constant/constant";

function counterReducer(state={size:0 , sum:0} , action)
{
    switch(action.type){
        case UPDATE_SIZE:
            return {...state, size: action.payload};
        case UPDATE_SUM:
            console.log("reducer sum: " + state.sum);
            console.log("reducer payload: " + action.payload);
            return {...state , sum: state.sum + action.payload};
        case RESET_SUM:
            console.log("reseting sum");
            return {...state, sum: 0};
        default:
            return state;
    }
}

export default counterReducer;