import React from 'react';
import s from './Pagination.module.css'

type PropsPaginationType = {
    pages: Array<number>
}

const Pagination: React.FC<PropsPaginationType> = props => {

    const {pages} = props

    return (
        <div className={s.container}>
            {pages.map((page: number, index: number) => <span key={index}
                                                              className={s.page}
                                                              onClick={()=> dispatch(currentPage(page))}
            >{page}</span>)}
        </div>
    )
}

export default Pagination;
