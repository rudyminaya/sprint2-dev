import React, { useState } from 'react'
import Card from './card'
import Summary from './summary'
import styles from './body.module.css'
import Empty from './empty'

const Body = (props) => {
    return (
        <div className={styles.body}>
            <Summary search={props.search} />
            {props.data.length == 0 && <Empty />}
            <div className={styles.cardContent}>
                {props.data.map((d, i) => {
                    return (
                        <Card
                            key={`card-${i}`}
                            name={d.name}
                            photo={d.photo}
                            description={d.description}
                            rooms={d.rooms}
                            city={d.city}
                            country={d.country}
                            price={d.price}
                            availabilityFrom={d.availabilityFrom}
                            availabilityTo={d.availabilityTo}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
