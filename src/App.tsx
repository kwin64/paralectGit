import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {
    getInitialUser,
    getNewUser,
    getRepoUser,
    PaginationType,
    setCurrentPage,
    UserType
} from './store/userDataReducer';
import Profile from "./components/Profile/Profile";
import InitialPage from "./components/InitialPage/InitialPage";

function App() {

    const [user, setUser] = useState<string>('')
    const [newValue, setNewValue] = useState<string>('')


    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.userDataReducer)
    const pagination = useSelector<AppRootStateType, PaginationType>(data => data.userDataReducer.Pagination)

    useEffect(() => {
        dispatch(getNewUser(user))
        dispatch(getRepoUser(user, pagination.currentPage, pagination.pageSize))
    }, [user])
    useEffect(() => {
        dispatch(getInitialUser('mojombo'))
        dispatch(getRepoUser('mojombo', pagination.currentPage, pagination.pageSize))
    }, [pagination])

    const updateNewUser = (user: string) => {
        setNewValue(user)
    }
    const addNewUser = () => {
        setUser(newValue)
    }
    const changePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <div className={s.container}>
            <Header updateNewUser={updateNewUser}
                    addNewUser={addNewUser}
            />
            <Profile dataUser={dataUser}
                     changePage={changePage}
                     pagination={pagination}
            />
            <InitialPage updateNewUser={updateNewUser}
                         addNewUser={addNewUser}
            />
        </div>
    )
}

export default App;
