import React from 'react'
import estilos from './ClearAll.module.css'

export default function ClearAll({ clearTasks }) {
    return (
        <div className={estilos.container__Clear}>
            <a href='#' onClick={clearTasks} className={estilos.link}>Clear Completed</a>
        </div>

    )
}
