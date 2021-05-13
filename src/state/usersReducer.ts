import {usersAPI, UserType} from "../api/usersApi";


export  type ActionsType = ReturnType<typeof getUser>


const initialStateUsers: Array<UserType> = []

export const usersReducer = (state: Array<UserType> = initialStateUsers, action: ActionsType) => {
    switch (action.type) {
        case "GET-USER": {
            return [{
                ...state,
                user: action.user
            }]
        }
    }
}

export const getUser = (user: UserType) => ({type: 'GET-USER', user})

export const getUserTC = (login: string) => async (dispatch: any) => {
    try {
        const res = await usersAPI.getUser(login)
        dispatch(getUser(res.data))
    } catch (e) {
        throw new Error(e)
    }
}