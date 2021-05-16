import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userDataReducer} from "./userDataReducer";

const rootReducer = combineReducers({
    userDataReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppActionsType
// export type AppThunk
