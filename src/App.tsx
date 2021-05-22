import React, {useEffect, useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import {
    getInitialUser,
    getNewUser,
    getRepoUser,
    PaginationType,
    setCurrentPage,
    UserType
} from './store/userDataReducer';
import {InitialPage} from "./components/InitialPage/InitialPage";
import {MainPage} from './components/MainPage/MainPage';
import {Redirect, Route, Switch} from 'react-router-dom';
import {EmptyPage} from "./components/EmptyPage/EmptyPage";
import {Preloader} from "./components/Preloader/Preloader";

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
        dispatch(getInitialUser(user))
        dispatch(getRepoUser(user, pagination.currentPage, pagination.pageSize))
    }, [pagination])
    //2 юз эффекта

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
            <Switch>
                <Route path={'/'} render={() =>
                    <InitialPage updateNewUser={updateNewUser}
                                 addNewUser={addNewUser}
                    />
                }/>
                <Route exact path={`/${user}`} render={() =>
                    <MainPage updateNewUser={updateNewUser}
                              addNewUser={addNewUser}
                              dataUser={dataUser}
                              changePage={changePage}
                              pagination={pagination}
                    />
                }/>
                <Route path={'/unknown'} render={() =>
                    <EmptyPage updateNewUser={updateNewUser}
                               addNewUser={addNewUser}
                    />
                }/>
                <Redirect from={'*'} to={'/unknown'}/>
            </Switch>
            <Preloader/>
        </div>
    )
}

export default App;
