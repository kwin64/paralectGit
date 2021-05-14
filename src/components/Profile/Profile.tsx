import React from 'react';
import Repositories from "./Repositories/Repositories";
import Description from "./Description/Description";
import s from './Profile.module.css'

function Profile() {
    return (
        <div className={s.container}>
            <Description/>
            <Repositories/>
        </div>
    )
}

export default Profile;
