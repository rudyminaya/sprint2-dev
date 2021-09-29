import React from 'react'
import { FaSadTear } from 'react-icons/fa'
import styles from './empty.module.css'

const Empty = () => {
    return (
        <div className={styles.empty}>
            <FaSadTear className={styles.icono} />
            <p>Lo sentimos, no hemos encontrado resultados para su búsqueda</p>
        </div>
    )
}

export default Empty
