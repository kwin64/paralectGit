import {usersAPI, UserType} from "../api/usersApi";
import {Dispatch} from "redux";

export  type ActionsType = ReturnType<typeof getUser>

let initialState: UserType[] = []
console.log(`initialState: ${initialState}`)

export const usersReducer = (state: UserType[] = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'userReducer/GET-USER' : {
            return [...state, action.user]
        }
        default:
            return state
    }
}

export const getUser = (user: UserType) => ({type: 'userReducer/GET-USER', user} as const)

export const getInitialUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getUserApi(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}
export const getNewUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getUserApi(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}