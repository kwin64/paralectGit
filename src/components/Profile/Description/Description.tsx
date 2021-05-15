import React from 'react';
import s from './Description.module.css'
import {UserType} from "../../../api/usersApi";
import followersIcon from '../../../common/assets/followersIcon.png'
import followingIcon from '../../../common/assets/followingIcon.png'


type PropsDescriptionType = {
    dataUser: UserType
}

const Description: React.FC<PropsDescriptionType> = props => {
    const {dataUser} = props
    return (
        <div className={s.container}>
            <img src={dataUser?.avatar_url} alt=""/>
            <h1>{dataUser?.name}</h1>
            <a href={'dataUser.login'}>{dataUser?.login}</a>
            <div className={s.subscribers}>
                <div className={s.followers}>
                    <span><img src={followersIcon}/>{`${dataUser?.followers} followers`}</span>
                </div>
                <div className={s.following}>
                    <span><img src={followingIcon}/>{`${dataUser?.following} following`}</span>
                </div>
            </div>
        </div>
    )
}

export default Description;
