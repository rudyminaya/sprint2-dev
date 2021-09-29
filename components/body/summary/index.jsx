import React from 'react'
import styles from './summary.module.css'

const Summary = ({ search }) => {
    if (search != null) {
        return (
            <main className={styles.summary}>
                <h3>Estos son nuestros resultados:</h3>
                <p>
                    Estadía
                    {search.site != null && (
                        <>
                            {` en `}
                            <strong>{search.site}</strong>
                        </>
                    )}
                    {search.checkin != null && (
                        <>
                            {` del `} <strong> {search.checkin}</strong>
                        </>
                    )}
                    {search.checkout != null && (
                        <>
                            {` al `} <strong> {search.checkout}</strong>
                        </>
                    )}
                    {search.price != null && (
                        <>
                            {` en la categoría `}
                            <strong> {search.price}</strong>
                        </>
                    )}
                    {search.size != null && (
                        <>
                            {` de tamaño `} <strong> {search.size}</strong>
                        </>
                    )}
                </p>
            </main>
        )
    } else {
        return <main className={styles.summary}></main>
    }
}

export default Summary
