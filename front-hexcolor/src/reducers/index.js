import { combineReducers } from "redux";
import colorReducer from './colorReducer'

const rootReducers = combineReducers({
    color: colorReducer
})

export default rootReducers;