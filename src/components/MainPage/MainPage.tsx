import React, {useEffect} from 'react';
import {Header} from "../Header/Header";
import s from './MainPage.module.css';
import Profile from "../Profile/Profile";
import {getNewUser, getRepoUser, PaginationType, UserType} from "../../store/userDataReducer";
import {useDispatch} from "react-redux";
import {NavLink, useParams} from 'react-router-dom';

type PropsMainPageType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
    dataUser: UserType
    changePage: (page: number) => void
    pagination: PaginationType
    user: string
}

export const MainPage: React.FC<PropsMainPageType> = props => {
    const {user: us} = useParams<{ user?: string }>()
    const {updateNewUser, addNewUser, dataUser, changePage, pagination, user} = props
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user, pagination.currentPage, pagination.pageSize))
    }, [pagination, user])

    return (
        <NavLink to={user}>
            <div className={s.container}>
                <Header updateNewUser={updateNewUser}
                        addNewUser={addNewUser}
                />
                <Profile dataUser={dataUser}
                         changePage={changePage}
                         pagination={pagination}
                />
            </div>
        </NavLink>
    )
}

