import React from 'react';
import s from './InitialProfile.module.css';
import search from '../../../common/assets/imageInitPage.png'

type PropsInitialPageType = {}

export const InitialProfile: React.FC<PropsInitialPageType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <div className={s.infoBlock}>
                <img src={search}/>
                <p>Start with searching a GitHub user</p>
            </div>
        </div>
    )
}

