import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'
import {UserType} from "../../api/usersApi";

type PropsProfileType = {
    avatar: string
    dataUser:UserType
}

const Profile: React.FC<PropsProfileType> = props => {
    const {avatar,dataUser} = props
    return (
        <div className={s.container}>
            <Description avatar={avatar}
                         dataUser={dataUser}
            />
            <Repositories/>
        </div>
    )
}

export default Profile;
