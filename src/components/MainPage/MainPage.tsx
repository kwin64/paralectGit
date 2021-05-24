import React, {useEffect} from 'react';
import s from './MainPage.module.css';
import Profile from "../Profile/Profile";
import {getAllRepos, getNewUser, getRepoUser, PaginationType, UserType} from "../../store/userDataReducer";
import {useDispatch} from "react-redux";

type PropsMainPageType = {
    dataUser: UserType
    changePage: (page: number) => void
    pagination: PaginationType
    user: string
}

export const MainPage: React.FC<PropsMainPageType> = props => {

    const {dataUser, changePage, pagination, user} = props

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user, pagination.currentPage, pagination.pageSize))
        dispatch(getAllRepos(user))
    }, [user, pagination])

    return (
        <div className={s.container}>
            <Profile dataUser={dataUser}
                     changePage={changePage}
                     pagination={pagination}
            />
        </div>
    )
}

