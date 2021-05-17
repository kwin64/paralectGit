import React from 'react';
import s from './Description.module.css'
import {UserDescriptionType} from "../../../api/userAPI";
import followersIcon from '../../../common/assets/followersIcon.png'
import followingIcon from '../../../common/assets/followingIcon.png'


type PropsDescriptionType = {
    userDescription: UserDescriptionType
}

const Description: React.FC<PropsDescriptionType> = props => {
    const {userDescription} = props
    return (
        <div className={s.container}>
            <img src={userDescription?.avatar_url} alt=""/>
            <h2>{userDescription?.name}</h2>
            <a href={'dataUser.login'}>{userDescription?.login}</a>
            <div className={s.subscribers}>
                <div className={s.followers}>
                    <img src={followersIcon}/>
                    <p>{`${userDescription?.followers} followers`}</p>
                </div>
                <div className={s.following}>
                    <img src={followingIcon}/>
                    <p>{`${userDescription?.following} following`}</p>
                </div>
            </div>
        </div>
    )
}

export default Description;
