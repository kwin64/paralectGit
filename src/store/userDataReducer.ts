import {UserDescriptionType, userAPI, RepoType} from "../api/userAPI";
import {Dispatch} from "redux";
import {UserType} from "../api/userAPI";

export  type ActionsType = ReturnType<typeof getUser>
    | ReturnType<typeof getRepo>

let initialState: UserType = {
    UserDescription: {} as UserDescriptionType,
    Repos: []
}

export const userDataReducer = (state: UserType = initialState, action: ActionsType): UserType => {
    switch (action.type) {
        case 'userReducer/GET-USER' :
            return {...state, UserDescription: action.user}
        case "reposReducer/GET-REPOS":
            return {...state, Repos: action.repos}
        default:
            return state
    }
}
export const getUser = (user: UserDescriptionType) => ({type: 'userReducer/GET-USER', user} as const)
export const getRepo = (repos: Array<RepoType>) => ({type: 'reposReducer/GET-REPOS', repos} as const)

export const getInitialUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getUserData(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}
export const getNewUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getUserData(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}
export const getRepoUser = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getRepos(nameUser)
        dispatch(getRepo(res.data))
    } catch (e) {
        console.log('Error')
    }
}