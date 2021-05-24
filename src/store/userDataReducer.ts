import {UserDescriptionType, userAPI, RepoType} from "../api/userAPI";
import {Dispatch} from "redux";

export  type ActionsType = ReturnType<typeof getUser>
    | ReturnType<typeof getRepo>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof getTotalNumbersRepos>

export type UserType = {
    UserDescription: UserDescriptionType,
    Repos: Array<RepoType>,
    Pagination: PaginationType,
    TotalNumbersRepos: Array<RepoType>
}

let initialState: UserType = {
    UserDescription: {} as UserDescriptionType,
    Repos: [],
    Pagination: {
        currentPage: 1,
        pageSize: 4,
    },
    TotalNumbersRepos: []
}
export type PaginationType = {
    currentPage: number
    pageSize: number
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
        case "reposReducer/GET_TOTAL_NUMBERS_REPOS":
            return {
                ...state,
                TotalNumbersRepos: action.repos
            }
        case 'reposReducer/SET_CURRENT_PAGE' :
            return {
                ...state,
                Pagination: {
                    ...state.Pagination,
                    currentPage: action.currentPage
                }
            }
        default:
            return state
    }
}
export const getUser = (user: UserDescriptionType) => ({type: 'userReducer/GET_USER', user} as const)
export const getRepo = (repos: Array<RepoType>) => ({type: 'reposReducer/GET_REPOS', repos} as const)
export const getTotalNumbersRepos = (repos: Array<RepoType>) => ({
    type: 'reposReducer/GET_TOTAL_NUMBERS_REPOS',
    repos
} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'reposReducer/SET_CURRENT_PAGE', currentPage,} as const)


export const getNewUser = (nameUser?: string) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getUserData(nameUser)
        dispatch(getUser(res.data))
    } catch (e) {
        console.log('Error')
    }
}
export const getRepoUser = (nameUser: string | undefined, currentPage: number, pagesCount: number) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getRepos(nameUser, currentPage, pagesCount)
        dispatch(getRepo(res.data))
    } catch (e) {
        console.log('Error')
    }
}
export const getAllRepos = (nameUser: string) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getAllRepos(nameUser)
        dispatch(getTotalNumbersRepos(res.data))
    } catch (e) {
        console.log('Error')
    }
}