import React from 'react';
import s from './EmptyProfile.module.css';
import union from "../../../common/assets/union.png";

type PropsEmptyPageType = {}

export const EmptyProfile: React.FC<PropsEmptyPageType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <div className={s.infoBlock}>
                <img src={union}/>
                <p>User not found</p>
            </div>
        </div>
    )
}

