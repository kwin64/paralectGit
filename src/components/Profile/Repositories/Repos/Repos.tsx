import React from 'react';
import s from './Repos.module.css'
import {RepoType} from "../../../../api/userAPI";

type PropsReposType = {
    repos: Array<RepoType>
}

const Repos: React.FC<PropsReposType> = props => {

    const {repos} = props

    const repo = repos.map(r => <div className={s.repo}>
        <a href={r.html_url}>{r.name}</a>
        <p>{r.description}</p>
    </div>)

    return (
        <div className={s.container}>
            {repo}
        </div>
    )
}

export default Repos;
