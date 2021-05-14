import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {createProfileUserTC} from './store/usersReducer';
import {AppRootStateType} from "./store/store";
import {useDispatch, useSelector} from 'react-redux';
import Header from "./components/Header/Header";

function App() {

    const dispatch = useDispatch()
    const name = useSelector<AppRootStateType, string>(store => store.users)
    const [nameUser, setNameUser] = useState<string>('')
    const [value, setValue] = useState<string>('')

    useEffect(()=> {
        dispatch(createProfileUserTC())
    },[])

    const newUser = (e: ChangeEvent<HTMLInputElement>) => {
        setNameUser(e.target.value)
    }
    const showUser = () => {
        setValue(nameUser)
    }
    console.log(name)

    return (
        <div>
            <Header/>
            <input onChange={newUser}/>
            <button onClick={showUser}>+</button>
            <span>User:</span>
        </div>
    )
}

export default App;
