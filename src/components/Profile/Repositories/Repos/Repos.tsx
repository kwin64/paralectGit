import React from 'react';
import s from './Repos.module.css'
import {RepoType, UserType} from "../../../../api/userAPI";

type PropsReposType = {
    repos: Array<RepoType>
}

const Repos: React.FC<PropsReposType> = props => {
    const {repos} = props

    // const repo = repos?.map(r =>
    // return <div>
    //
    //     </div>
    // )

    // console.log({repo})
    return (
        <div className={s.container}>

        </div>
    )
}

export default Repos;
