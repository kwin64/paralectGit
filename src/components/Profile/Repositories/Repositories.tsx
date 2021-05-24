import React from 'react';
import s from './Repositories.module.css'
import Repos from "./Repos/Repos";
import {RepoType} from "../../../api/userAPI";

type PropsRepositoriesType = {
    repos: Array<RepoType>
    totalNumbersRepos: number
}

const Repositories: React.FC<PropsRepositoriesType> = props => {
    const {repos, totalNumbersRepos} = props
    return (
        <div className={s.container}>
            <h1>Repositories ({totalNumbersRepos})</h1>
            <Repos repos={repos}/>
        </div>
    )
}

export default Repositories;
