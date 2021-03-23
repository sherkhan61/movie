import React from 'react'
import s from './Preloader.module.scss'

export const Preloader = () => {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}