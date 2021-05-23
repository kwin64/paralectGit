import React from 'react';
import {Header} from "../Header/Header";
import s from './EmptyPage.module.css';
import {EmptyProfile} from "./EmptyProfile/EmptyProfile";
import {NavLink} from "react-router-dom";

type PropsEmptyPageType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
}

export const EmptyPage: React.FC<PropsEmptyPageType> = props => {

    const {updateNewUser, addNewUser} = props

    return (
        <NavLink to='/unknown'>
            <div className={s.container}>
                <Header updateNewUser={updateNewUser}
                        addNewUser={addNewUser}
                />
                <EmptyProfile/>
            </div>
        </NavLink>
    )
}

