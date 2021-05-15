import React from 'react';
import s from './Repositories.module.css'
import Repos from "./Repos/Repos";
import {UserType} from "../../../api/usersApi";

type PropsRepositoriesType = {
    dataUser: UserType
}

const Repositories: React.FC<PropsRepositoriesType> = props => {
    const {dataUser} = props
    return (
        <div className={s.container}>
            <h1>Repositories ({dataUser?.repos_url})</h1>
            <div>
                <Repos dataUser={dataUser}/>
            </div>
        </div>
    )
}

export default Repositories;
