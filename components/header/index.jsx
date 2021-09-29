import React, { useState } from 'react'
import Brand from './brand'
import Filters from './filters'
import styles from './header.module.css'

const Header = (props) => {
    return (
        <header className={styles.contenedor}>
            <Brand />
            <Filters
                filtrar={props.filtrar}
                data={props.data}
                setSearch={props.setSearch}
            />
        </header>
    )
}

export default Header
