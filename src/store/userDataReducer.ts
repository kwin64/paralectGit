import {UserDescriptionType, userAPI, RepoType} from "../api/userAPI";
import {Dispatch} from "redux";

export  type ActionsType = ReturnType<typeof getUser>
    | ReturnType<typeof getRepo>
    | ReturnType<typeof setCurrentPage>


export type UserType = {
    UserDescription: UserDescriptionType,
    Repos: Array<RepoType>,
    Pagination: PaginationType
}

let initialState: UserType = {
    UserDescription: {} as UserDescriptionType,
    Repos: [],
    Pagination: {
        currentPage: 1,
        perPage: 10,
        totalCount: 0
    }
}
export type PaginationType = {
    currentPage: number
    perPage: number
    totalCount: number
}

export const userDataReducer = (state: UserType = initialState, action: ActionsType): UserType => {
    switch (action.type) {
        case 'userReducer/GET_USER' :
            return {
                ...state,
                UserDescription: action.user
            }
        case 'reposReducer/GET_REPOS':
            return {
                ...state,
                Repos: action.repos
            }
        case 'reposReducer/SET_CURRENT_PAGE' :
            return {
                ...state,
                Pagination: {
                    ...state.Pagination,
                    currentPage: action.page
                }
            }
        default:
            return state
    }
}
export const getUser = (user: UserDescriptionType) => ({type: 'userReducer/GET_USER', user} as const)
export const getRepo = (repos: Array<RepoType>) => ({type: 'reposReducer/GET_REPOS', repos} as const)
export const setCurrentPage = (page: number) => ({type: 'reposReducer/SET_CURRENT_PAGE', page} as const)

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