import React from 'react'
import styles from '../card.module.css'

const TituloCard = (props) => {
    return (
        <>
            <p className={styles.title}>{props.name}</p>
        </>
    )
}

export default TituloCard
