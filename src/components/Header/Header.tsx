import React from 'react';
import git from '../../common/assets/github.png'
import search from '../../common/assets/search.png'
import s from './header.module.css';


function Header() {
    return (
        <div>
            <div className={s.container}>
                <a href="https://github.com/kwin64"><img width='50px' src={git}/></a>
                <img width='20px' src={search}/>
                <input type="text"/>
            </div>
        </div>
    )
}

export default Header;
