import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {getInitialUser, getNewUser, getRepoUser} from './store/userDataReducer';
import Profile from "./components/Profile/Profile";
import {UserType} from "./api/userAPI";

function App() {

    const [user, setUser] = useState<string>('') //state
    const [newValue, setNewValue] = useState<string>('')//onChange

    const updateNewUser = (user: string) => {
        setNewValue(user)
    }
    const addNewUser = () => {
        setUser(newValue)
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user))
    }
    useEffect(() => {
        dispatch(getInitialUser('mojombo'))
        dispatch(getRepoUser('mojombo'))
    }, [])


    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.userDataReducer)
    console.log(user)
    console.log(dataUser)

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
            <Profile dataUser={dataUser}/>
        </div>
    )
}

export default App;
