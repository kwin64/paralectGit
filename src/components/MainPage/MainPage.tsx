import React from 'react';
import {Header} from "../Header/Header";
import s from './MainPage.module.css';
import Profile from "../Profile/Profile";
import {PaginationType, UserType} from "../../store/userDataReducer";

type PropsMainPageType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
    dataUser: UserType
    changePage: (page: number) => void
    pagination: PaginationType
}

export const MainPage: React.FC<PropsMainPageType> = props => {

    const {updateNewUser, addNewUser, dataUser, changePage, pagination} = props

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
            <Profile dataUser={dataUser}
                     changePage={changePage}
                     pagination={pagination}
            />
        </div>
    )
}

