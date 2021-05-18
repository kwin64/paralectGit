import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'
import Pagination from "./Pagination/Pagination";
import {PaginationType, UserType} from "../../store/userDataReducer";
import {RepoType} from "../../api/userAPI";

type PropsProfileType = {
    dataUser: UserType
    changePage: (page: number) => void
    totalRepos: Array<RepoType>
    pagination: PaginationType
}

const Profile: React.FC<PropsProfileType> = props => {
    const {dataUser, totalRepos, changePage, pagination} = props
    return (
        <div className={s.container}>
            <Description userDescription={dataUser.UserDescription}/>
            <Repositories repos={dataUser.Repos}/>
            <Pagination totalRepos={dataUser.UserDescription.public_repos}
                        changePage={changePage}
                        pagination={pagination}
            />
        </div>
    )
}

export default Profile;
