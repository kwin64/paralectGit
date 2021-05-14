import {usersAPI} from "../api/usersApi";
import {Dispatch} from "redux";


export  type ActionsType = ReturnType<typeof getAvatar>

// baseURL: 'https://api.github.com/',
// https://avatars.githubusercontent.com/u/68448616?v=4
// https://avatars.githubusercontent.com/u/1?v=4

let initialState: string = 'https://avatars.githubusercontent.com/u/68448616?v=4'

export const avatarUserReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'avatarUserReducer/GET-AVATAR' : {
            return state
        }
        default:
            return state
    }
}

export const getAvatar = (avatar: any) => ({type: 'avatarUserReducer/GET-AVATAR', avatar} as const)

export const getAvatarUser = (idUser: number) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getAvatarApi(idUser)
        dispatch(getAvatar(res.data))
    } catch (e) {
        console.log('Error')
    }
}
