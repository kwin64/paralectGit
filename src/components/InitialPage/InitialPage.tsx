import React from 'react';
import Header from "../Header/Header";
import s from './InitialPage.module.css';

type PropsInitialPageType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
}

const InitialPage: React.FC<PropsInitialPageType> = props => {

    const {updateNewUser, addNewUser} = props

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
        </div>
    )
}

export default InitialPage;
