import React from 'react';
import git from '../../common/assets/github.png'
import search from '../../common/assets/search.png'
import s from './Header.module.css';


function Header() {
    return (
        <div className={s.container}>
            <div className={s.logo}>
                <a href="https://github.com/kwin64"><img src={git}/></a>
            </div>
            <div className={s.searchArea}>
                <img src={search}/>
                <input/>
            </div>
        </div>
    )
}

export default Header;
