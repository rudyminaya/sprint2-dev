import React from 'react'
import styles from '../card.module.css'
import { FaDollarSign } from 'react-icons/fa'

const PrecioCard = (props) => {
    let grisArr = [1, 2, 3, 4]
    let precio = props.price
    return (
        <div className={styles.stars}>
            {grisArr.map((e, i) => {
                if (e <= precio) {
                    return <FaDollarSign key={i} className={styles.ambar} />
                } else {
                    return <FaDollarSign key={i} className={styles.star} />
                }
            })}
        </div>
    )
}

export default PrecioCard
