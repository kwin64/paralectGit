import React, {useEffect, useState} from 'react';
import './App.css';
import {usersAPI} from "./api/mainScreenApi";

function App() {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        usersAPI.getUser('kwin64')
            .then(res=> {
                setState(res)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export default App;
