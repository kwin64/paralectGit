import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {getUserTC} from './store/usersReducer';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";

function App() {

    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType, string>(store => store.users)
    const [nameUser, setNameUser] = useState<string>('')
    const [value, setValue] = useState<string>('')

    const newUser = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUser(e.target.value)
    }
    const showUser = () => {
        setValue(nameUser)
        dispatch(getUserTC(value))
    }
    console.log(name)

    return (
        <div>
            <Header/>
            <input onChange={newUser}/>
            <button onClick={showUser}>+</button>
            <span>User:{name}</span>
        </div>
    )
}

export default App;
