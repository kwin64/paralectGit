import React from 'react';
import s from './Repos.module.css'
import {UserType} from "../../../../api/usersApi";

type PropsReposType = {
    dataUser: UserType
}

const Repos: React.FC<PropsReposType> = props => {
    const {dataUser} = props

    const repo = dataUser?.repos_url

    console.log(repo)
    return (
        <div className={s.container}>

        </div>
    )
}

export default Repos;
