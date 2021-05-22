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
import {Route, Switch} from 'react-router-dom';

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
            <Switch>
                <Route exact path={'/kwin64'} render={() =>
                    <MainPage updateNewUser={updateNewUser}
                              addNewUser={addNewUser}
                              dataUser={dataUser}
                              changePage={changePage}
                              pagination={pagination}
                    />
                }/>
                <Route path={'/'} render={() =>
                    <InitialPage updateNewUser={updateNewUser}
                                 addNewUser={addNewUser}
                    />
                }/>
            </Switch>
        </div>
    )
}

export default App;
