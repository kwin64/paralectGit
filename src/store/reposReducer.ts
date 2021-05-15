import {RepoType, usersAPI} from "../api/usersApi";
import {Dispatch} from "redux";

export  type ActionsType = ReturnType<typeof getUser>

let initialState: Array<RepoType> = []

export const reposReducer = (state: Array<RepoType> = initialState, action: ActionsType) => {
    switch (action.type) {
        case "reposReducer/GET-REPOS": {
            return [...state, action.repos]
        }
        default:
            return state
    }
}

export const getUser = (repos: RepoType) => ({type: 'reposReducer/GET-REPOS', repos} as const)

export const getRepos = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await usersAPI.getReposApi(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}
