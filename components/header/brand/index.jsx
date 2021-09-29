import React from 'react'
import styles from './brand.module.css'

const Brand = () => {
    return (
        <figure className={styles.brand}>
            <img src="/assets/stars.png" />
            <figcaption>Reserva tu Estadía</figcaption>
            <p>Disfruta de tu nueva aventura </p>
        </figure>
    )
}

export default Brand
