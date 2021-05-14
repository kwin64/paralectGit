import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";
import {getInitialUser, getNewUser} from './store/usersReducer';

function App() {

    const dispatch = useDispatch();
    const name = useSelector<AppRootStateType>(store => store.users)
    const [nameUser, setNameUser] = useState<string>('')
    const [value, setValue] = useState<string>('')

    useEffect(() => {
        dispatch(getInitialUser('kwin64'))
    }, [])

    const newUser = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUser(e.target.value)
    }
    const showUser = () => {
        if (nameUser) {
            dispatch(getNewUser(value))
        }
        setValue(nameUser)
    }
    console.log(name)
    console.log(value)

    return (
        <div>
            <Header/>
            <div>
                {/*<img src={} alt=""/>*/}
            </div>
            <input onChange={newUser}/>
            <button onClick={showUser}>+</button>
        </div>
    )
}

export default App;
