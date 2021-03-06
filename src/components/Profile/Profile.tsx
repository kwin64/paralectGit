import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'
import Pagination from "./Pagination/Pagination";
import {PaginationType, UserType} from "../../store/userDataReducer";

type PropsProfileType = {
    dataUser: UserType
    changePage: (page: number) => void
    pagination: PaginationType
}

const Profile: React.FC<PropsProfileType> = props => {

    const {dataUser, changePage, pagination} = props

    return (
        <div className={s.container}>
            <Description userDescription={dataUser.UserDescription}/>
            <Repositories repos={dataUser.Repos}
                          totalNumbersRepos={dataUser.UserDescription.public_repos}
            />
            <Pagination totalRepos={dataUser.UserDescription.public_repos}
                        changePage={changePage}
                        pagination={pagination}
            />
        </div>
    )
}

export default Profile;
