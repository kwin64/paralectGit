import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {getInitialUser, getNewUser, getRepoUser, PaginationType, UserType} from './store/userDataReducer';
import Profile from "./components/Profile/Profile";

function App() {

    const [user, setUser] = useState<string>('') //state
    const [newValue, setNewValue] = useState<string>('')//onChange

    useEffect(() => {
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user))
    }, [user])
    useEffect(() => {
        dispatch(getInitialUser('mojombo'))
        dispatch(getRepoUser('mojombo'))
    }, [])

    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.userDataReducer)
    const pagination = useSelector<AppRootStateType, PaginationType>(data => data.userDataReducer.Pagination)

    const pages = [1,2,3,4,5]

    const updateNewUser = (user: string) => {
        setNewValue(user)
    }
    const addNewUser = () => {
        setUser(newValue)

    }

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
            <Profile dataUser={dataUser}
                     pages={pages}
            />
        </div>
    )
}

export default App;
