import React, {useEffect} from 'react';
import s from './MainPage.module.css';
import Profile from "../Profile/Profile";
import {getNewUser, getRepoUser, PaginationType, UserType} from "../../store/userDataReducer";
import {useDispatch} from "react-redux";
import {useParams} from 'react-router-dom';

type PropsMainPageType = {
    dataUser: UserType
    changePage: (page: number) => void
    pagination: PaginationType
}

export const MainPage: React.FC<PropsMainPageType> = props => {
    const {dataUser, changePage, pagination} = props

    const {user} = useParams<{ user?: string }>()
    const dispatch = useDispatch()

    console.log(user)

    useEffect(() => {
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user, pagination.currentPage, pagination.pageSize))
    }, [pagination])

    return (
        <div className={s.container}>
            <Profile dataUser={dataUser}
                     changePage={changePage}
                     pagination={pagination}
            />
        </div>
    )
}

