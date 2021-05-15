import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {userData} from "./userData";

const rootReducer = combineReducers({
    userData: userData
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppActionsType
// export type AppThunk
