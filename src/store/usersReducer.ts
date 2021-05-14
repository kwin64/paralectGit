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

export const getUserTC = (login: any) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getUserApi(login)
        dispatch(getUser(res.data))
        console.log(res)
    } catch (e) {
        console.log('lasdknas')
    }
}