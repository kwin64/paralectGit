import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'
import {UserType} from "../../api/userAPI";

type PropsProfileType = {
    dataUser: UserType
}

const Profile: React.FC<PropsProfileType> = props => {
    const {dataUser} = props
    return (
        <div className={s.container}>
            <Description userDescription={dataUser.UserDescription}/>
            <Repositories repos={dataUser.Repos}/>
        </div>
    )
}

export default Profile;
