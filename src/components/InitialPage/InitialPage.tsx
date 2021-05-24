import React from 'react';
import s from './InitialPage.module.css';
import {InitialProfile} from './InitialProfile/InitialProfile';

type PropsInitialPageType = {}

export const InitialPage: React.FC<PropsInitialPageType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <InitialProfile/>
        </div>
    )
}

