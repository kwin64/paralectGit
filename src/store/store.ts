import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {usersReducer} from "./usersReducer";
import {reposReducer} from "./reposReducer";

const rootReducer = combineReducers({
    users: usersReducer,
    repos: reposReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppActionsType
// export type AppThunk
