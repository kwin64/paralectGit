import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import git from '../../common/assets/github.png'
import search from '../../common/assets/search.png'
import s from './Header.module.css';
import {useHistory} from "react-router-dom";


type PropsHeaderType = {
    addNewUser: (newUser: string) => void
}

export const Header: React.FC<PropsHeaderType> = props => {

    const [newValue, setNewValue] = useState<string>('')

    const {addNewUser} = props

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewUser(newValue)
            setNewValue('')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(e.currentTarget.value)
    }

    const onClickImgSearchHandler = () => {
        addNewUser(newValue)
    }

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <a href="https://github.com/kwin64">
                    <img src={git}/></a>
            </div>
            <div className={s.searchArea}>
                <img src={search}
                     onClick={onClickImgSearchHandler}
                />
                <input onKeyPress={onKeyPressHandler}
                       onChange={onChangeHandler}
                       placeholder='Enter GitHub username'
                />
            </div>
        </div>
    )
}

