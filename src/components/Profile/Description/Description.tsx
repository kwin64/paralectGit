import React from 'react';
import s from './Description.module.css'
import {UserType} from "../../../api/usersApi";

type PropsDescriptionType = {
    avatar: string
    dataUser: UserType
}

const Description: React.FC<PropsDescriptionType> = props => {
    const {avatar, dataUser} = props
    return (
        <div className={s.container}>
            <img src={avatar} alt=""/>
            <h1>{dataUser.name}</h1>
            <a>{dataUser.login}</a>
            <div>
                <span>{`${dataUser.followers}:followers`}</span>
                <span>{`${dataUser.following}:following`}</span>
            </div>
        </div>
    )
}

export default Description;
