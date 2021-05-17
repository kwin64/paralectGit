import {UserDescriptionType, userAPI, RepoType} from "../api/userAPI";
import {Dispatch} from "redux";

export  type ActionsType = ReturnType<typeof getUser>
    | ReturnType<typeof getRepo>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setPagesCount>


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
        pagesCount: 4,
        totalCount: 20
    }
}
export type PaginationType = {
    currentPage: number
    pagesCount: number
    totalCount: number
}
console.log(initialState.Repos)

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
                    currentPage: action.currentPage
                }
            }
        case "reposReducer/SET_PAGES_COUNT":
            return {
                ...state,
                Pagination: {
                    ...state.Pagination,
                    pagesCount: action.pagesCount
                }
            }
        default:
            return state
    }
}
export const getUser = (user: UserDescriptionType) => ({type: 'userReducer/GET_USER', user} as const)
export const getRepo = (repos: Array<RepoType>) => ({type: 'reposReducer/GET_REPOS', repos} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'reposReducer/SET_CURRENT_PAGE', currentPage,} as const)
export const setPagesCount = (pagesCount: number) => ({type: 'reposReducer/SET_PAGES_COUNT', pagesCount,} as const)

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
export const getRepoUser = (nameUser: string, currentPage: number, pagesCount: number) => async (dispatch: Dispatch) => {
    try {
        const res = await userAPI.getRepos(nameUser, currentPage, pagesCount)
        dispatch(getRepo(res.data))
        dispatch(setCurrentPage(currentPage))
        dispatch(setPagesCount(pagesCount))
    } catch (e) {
        console.log('Error')
    }
}