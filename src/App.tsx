import React, {ChangeEvent, useEffect, useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {getInitialUser, getNewUser} from './store/usersReducer';
import Profile from "./components/Profile/Profile";
import {UserType} from "./api/usersApi";
import {getRepos} from "./store/reposReducer";

function App() {

    useEffect(() => {
        dispatch(getInitialUser('kwin64'))
        dispatch(getRepos('kwin64'))
    }, [])

    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.users[0])

    debugger

    const [nameUser, setNameUser] = useState<string>('')
    const [value, setValue] = useState<string>('')

    const newUser = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUser(e.target.value)
    }
    const showUser = () => {
        setValue(nameUser)
        dispatch(getNewUser(value))
    }

    return (
        <div className={s.container}>
            <Header/>
            <Profile dataUser={dataUser}/>
            {/*<input onChange={newUser}/>*/}
            {/*<button onClick={showUser}>+</button>*/}
            {/*<span>{JSON.stringify(name)}</span>*/}
        </div>
    )
}

export default App;
