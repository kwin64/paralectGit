import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {useDispatch} from "react-redux";

function App() {

    // const dispatch = useDispatch()
    //
    // const [nameUser, setNameUser] = useState<string>()
    // const [value, setValue] = useState<string>()
    //
    // const newUser = (e: ChangeEvent<HTMLInputElement>) => {
    //     setNameUser(e.target.value)
    // }
    // const showValue = () => {
    //     setValue(nameUser)
    // }



    return (
        <div>
            <input type="text"
                   onChange={newUser}
            />
            <button onClick={showValue}>+</button>
        </div>
    )
}


export default App;
