import React from 'react'
import styles from './card.module.css'
import Photo from '../card/photo'
import TituloCard from './titleCard'
import PrecioCard from './price'
import SummaryCard from './summaryCard'
import Features from './features'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <Photo imagen={props.photo} name={props.name} />
            <div className={styles.headerCard}>
                <TituloCard name={props.name} />
                <PrecioCard price={props.price} />
            </div>
            <SummaryCard parrafo={props.description} />
            <Features
                country={props.country}
                city={props.city}
                rooms={props.rooms}
                dateFrom={props.availabilityFrom}
                dateTo={props.availabilityTo}
            />
            <a className={styles.reservar}>Reservar</a>
        </div>
    )
}

export default Card
