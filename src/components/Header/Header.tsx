import React, {ChangeEvent, KeyboardEvent} from 'react';
import git from '../../common/assets/github.png'
import search from '../../common/assets/search.png'
import s from './Header.module.css';


type PropsHeaderType = {
    updateNewUser: (user: string) => void
    addNewUser: () => void
}

export const Header: React.FC<PropsHeaderType> = props => {

    const {updateNewUser, addNewUser} = props

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addNewUser()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        updateNewUser(e.currentTarget.value)
    }
    const onClickImgSearchHandler = () => {
        addNewUser()
    }

    return (
        <div className={s.container}>
            <div className={s.logo}>
                <a href="https://github.com/kwin64"><img src={git}/></a>
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

