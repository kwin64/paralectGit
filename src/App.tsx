import React, {useState} from 'react';
import s from './App.module.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import {PaginationType, setCurrentPage, UserType} from './store/userDataReducer';
import {InitialPage} from "./components/InitialPage/InitialPage";
import {MainPage} from './components/MainPage/MainPage';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import {EmptyPage} from "./components/EmptyPage/EmptyPage";
import {Header} from "./components/Header/Header";

function App() {

    const [user, setUser] = useState<string>('')
    let history = useHistory();

    const dispatch = useDispatch();
    const dataUser = useSelector<AppRootStateType, UserType>(data => data.userDataReducer)
    const pagination = useSelector<AppRootStateType, PaginationType>(data => data.userDataReducer.Pagination)

    const addNewUser = (newUser: string) => {
        setUser(newUser)
        history.push({
            pathname: '/user',
            search: `${user}`
        })
    }
    const changePage = (page: number) => {
        dispatch(setCurrentPage(page))
    }

    return (
        <div className={s.container}>
            <Header addNewUser={addNewUser}
            />
            <Switch>
                <Route path={'/paralectGit'} render={() =>
                    <InitialPage/>
                }/>
                <Route exact path={`/user/`} render={() =>
                    <MainPage dataUser={dataUser}
                              changePage={changePage}
                              pagination={pagination}
                              user={user}
                    />
                }/>
                <Route path={'/unknown'} render={() =>
                    <EmptyPage/>
                }/>
                <Route path={'*'} render={() => <Redirect to={'/unknown'}/>}/>
            </Switch>
            {/*<Preloader/>*/}
        </div>
    )
}

export default App;
