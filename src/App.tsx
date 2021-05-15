import React, {useEffect} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {getInitialUser, getRepoUser} from './store/userData';
import Profile from "./components/Profile/Profile";
import {UserType} from "./api/userAPI";

function App() {

    useEffect(() => {
        dispatch(getInitialUser('harryheman'))
        dispatch(getRepoUser('harryheman'))
    }, [])

    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.userData)

    return (
        <div className={s.container}>
            <Header/>
            <Profile dataUser={dataUser}/>
        </div>
    )
}

export default App;
