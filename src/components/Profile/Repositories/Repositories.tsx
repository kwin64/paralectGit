import React from 'react';
import s from './Repositories.module.css'
import Repos from "./Repos/Repos";
import {RepoType} from "../../../api/userAPI";

type PropsRepositoriesType = {
    repos: Array<RepoType>
}

const Repositories: React.FC<PropsRepositoriesType> = props => {
    const {repos} = props
    return (
        <div className={s.container}>
            <h1>Repositories ({repos?.length})</h1>
            <Repos repos={repos}/>
        </div>
    )
}

export default Repositories;
