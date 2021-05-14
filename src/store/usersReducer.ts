import {usersAPI, UserType} from "../api/usersApi";
import {Dispatch} from "redux";


export  type ActionsType = ReturnType<typeof createMyProfile> | ReturnType<typeof getUser>


// https://avatars.githubusercontent.com/u/68448616?v=4
// https://avatars.githubusercontent.com/u/1?v=4

let initialState: UserType[] = []

console.log('state:', initialState)

export const usersReducer = (state: UserType[] = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'userReducer/GET-INITIAL-USER' : {
            return [...state, action.user]
        }
        default:
            return state
    }
}

export const createMyProfile = (user: UserType) => ({type: 'userReducer/GET-INITIAL-USER', user} as const)
export const getUser = (user: UserType) => ({type: 'userReducer/GET-USER', user} as const)

export const getInitialUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getUserApi(nameUser)
        dispatch(createMyProfile(res.data))
    } catch (e) {
        console.log('lasdknas')
    }
}
export const getNewUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        // let nameUser = 'kwin6490'
        const res = await usersAPI.getUserApi(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('lasdknas')
    }
}