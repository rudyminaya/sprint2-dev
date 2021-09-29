import React from 'react'
import styles from '../card.module.css'

const SummaryCard = (props) => {
    return (
        <div className={styles.summaryCard}>
            <div className={styles.summary}>{props.parrafo}</div>
        </div>
    )
}

export default SummaryCard
