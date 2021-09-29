import React from 'react'
import styles from '../card.module.css'
const Photo = (props) => {
    return (
        <>
            <img src={props.imagen} alt={`foto de ${props.name}`} />
        </>
    )
}

export default Photo
