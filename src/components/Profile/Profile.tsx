import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'
import Pagination from "./Pagination/Pagination";
import {UserType} from "../../store/userDataReducer";

type PropsProfileType = {
    dataUser: UserType,
    pages: Array<number>
}

const Profile: React.FC<PropsProfileType> = props => {
    const {dataUser, pages} = props
    return (
        <div className={s.container}>
            <Description userDescription={dataUser.UserDescription}/>
            <Repositories repos={dataUser.Repos}/>
            <Pagination pages={pages}/>
        </div>
    )
}

export default Profile;
