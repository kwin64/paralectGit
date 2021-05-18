import React from 'react';
import s from './Pagination.module.css'
import {PaginationType} from "../../../store/userDataReducer";
import {RepoType} from "../../../api/userAPI";

type PropsPaginationType = {
    totalRepos: number
    changePage: (page: number) => void
    pagination: PaginationType
}

const Pagination: React.FC<PropsPaginationType> = props => {

    const {totalRepos, changePage, pagination} = props

    let pagesCount = Math.ceil(totalRepos / pagination.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.container}>
            {pages.map(page => <span key={page}
                                     className={pagination.currentPage === page ? s.activePage : s.page}
                                     onClick={() => {
                                         changePage(page)
                                     }}
            >{page}</span>)}
        </div>
    )
}

export default Pagination;
