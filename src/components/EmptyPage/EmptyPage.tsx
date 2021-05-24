import React from 'react';
import s from './EmptyPage.module.css';
import {EmptyProfile} from "./EmptyProfile/EmptyProfile";

type PropsEmptyPageType = {}

export const EmptyPage: React.FC<PropsEmptyPageType> = props => {

    const {} = props

    return (
        <div className={s.container}>
            <EmptyProfile/>
        </div>
    )
}

