import React from 'react';
import {Header} from "../Header/Header";
import s from './InitialPage.module.css';
import {InitialProfile} from './InitialProfile/InitialProfile';

type PropsInitialPageType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
}

export const InitialPage: React.FC<PropsInitialPageType> = props => {

    const {updateNewUser, addNewUser} = props

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
            <InitialProfile/>
        </div>
    )
}

