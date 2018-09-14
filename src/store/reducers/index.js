import { combineReducers } from "redux";

import chat from './chat'
import watson from './watson'

const rootReducer = combineReducers({
    chat,
    watson
})

export default rootReducer