import {usersAPI, UserType} from "../api/usersApi";
import {Dispatch} from "redux";


export  type ActionsType = ReturnType<typeof getUser>


let initialState: any = [

]

export const usersReducer = (state: any = initialState, action: ActionsType) => {
    switch (action.type) {
        case "GET-USER": {
            return {
                ...state,
                user: action.user
            }
        }
        default:
            return state
    }
}

export const getUser = (user: UserType) => ({type: 'GET-USER', user})

export const createProfileUserTC = () => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.myProfileUserApi()
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('lasdknas')
    }
}
export const getUserTC = (login: string) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.myProfileUserApi()
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('lasdknas')
    }
}