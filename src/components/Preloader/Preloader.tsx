import React from 'react';
import s from './Preloader.module.css'

type PropsPreloaderType = {}

export const Preloader: React.FC<PropsPreloaderType> = props => {

    const {} = props

    return (
        <div className={s.gooey}>
            <span className={s.dot}/>
            <div className={s.dots}>
                <span/>
                <span/>
                <span/>
            </div>
        </div>
    )
}