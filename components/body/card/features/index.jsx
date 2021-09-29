import React from 'react'
import { FaBed, FaCalendarAlt, FaMapMarkedAlt } from 'react-icons/fa'
import styles from '../card.module.css'

const Features = (props) => {
    const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
    ]
    const dias = [
        'lunes',
        'martes',
        'miercoles',
        'jueves',
        'viernes',
        'sábado',
        'domingo',
    ]
    const desde = new Date(props.dateFrom)
    const hasta = new Date(props.dateTo)

    const desdeString = `Del ${
        dias[desde.getDay() - 1]
    }, ${desde.getDate()} de ${
        meses[desde.getMonth()]
    } del ${desde.getFullYear()}`

    const hastaString = `Al ${
        dias[hasta.getDay() - 1]
    }, ${hasta.getDate()} de ${
        meses[hasta.getMonth()]
    } del ${hasta.getFullYear()}`
    return (
        <div className={styles.featuresCard}>
            <div className={styles.label}>
                <FaMapMarkedAlt />
                <span>
                    {props.country}, {props.city}
                </span>
            </div>
            <div className={styles.label}>
                <FaBed />
                <span>{props.rooms} Habitaciones</span>
            </div>
            <div className={styles.label}>
                <FaCalendarAlt />
                <div>
                    <p>{desdeString}</p>
                    <p>{hastaString}</p>
                </div>
            </div>
        </div>
    )
}

export default Features
