import React, { useEffect, useState } from 'react'
import styles from './filters.module.css'
import Location from './location'
import CheckIn from './checkIn'
import CheckOut from './checkOut'
import SizeRoom from './sizeRoom'
import PriceRoom from './priceRoom'
import LimpiarFiltros from './clean'

const Filters = ({ filtrar, data, setSearch }) => {
    const [checkin, setCheckin] = useState('')
    const [checkout, setCheckout] = useState('')
    const [site, setSite] = useState(0)
    const [size, setSize] = useState(0)
    const [price, setPrice] = useState(0)

    /* Funcion para reiniciar valores en la barra de filtros */
    const limpiar = () => {
        setSite(0)
        setPrice(0)
        setSize(0)
        setCheckin('')
        setCheckout('')
        setSearch(null)
    }

    useEffect(() => {
        let resultados = data

        /* Filtrando países */
        let paisSeleccionado = null

        if (site == 1) {
            paisSeleccionado = 'Argentina'
        } else if (site == 2) {
            paisSeleccionado = 'Brasil'
        } else if (site == 3) {
            paisSeleccionado = 'Chile'
        } else if (site == 4) {
            paisSeleccionado = 'Uruguay'
        }
        if (site != 0) {
            resultados = resultados.filter(
                (e) => e.country === paisSeleccionado
            )
        }

        /* filtrando precios */
        let priceText = null

        if (price == 1) {
            priceText = 'Económico'
        } else if (price == 2) {
            priceText = 'Confort'
        } else if (price == 3) {
            priceText = 'Lujoso'
        } else if (price == 4) {
            priceText = 'Magnífico'
        }

        if (price != 0) {
            resultados = resultados.filter((e) => e.price == price)
        }

        /* filtrando tamaño */

        let sizeText = null

        if (size == 1) {
            resultados = resultados.filter((e) => e.rooms < 11)
            sizeText = 'pequeño'
        } else if (size == 2) {
            resultados = resultados.filter((e) => e.rooms > 10 && e.rooms < 21)
            sizeText = 'mediano'
        } else if (size == 3) {
            resultados = resultados.filter((e) => e.rooms > 20)
            sizeText = 'grande'
        }

        /* filtrando checkin */

        let checkinText = null

        if (checkin != '') {
            /* transformando la fecha seleccionada en el filtro a Epoch */

            const nuevaFecha = new Date(checkin + 'T00:00:00.000-0500')

            const format = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            checkinText = nuevaFecha.toLocaleDateString('pe-PE', format)

            resultados = resultados.filter(
                (e) => e.availabilityFrom <= nuevaFecha
            )
        }

        /* filtrando checkout */

        let checkoutText = null

        if (checkout != '') {
            /* transformando la fecha seleccionada en el filtro a Epoch */

            const nuevoCheckOut = new Date(checkout + 'T00:00:00.000-0500')

            const format = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            checkoutText = nuevoCheckOut.toLocaleDateString('pe-PE', format)

            resultados = resultados.filter(
                (e) => e.availabilityTo >= nuevoCheckOut
            )
        }
        /* FUNCION QUE MUESTRA LO FILTRADO */
        filtrar(resultados)

        if (
            paisSeleccionado != null ||
            priceText != null ||
            sizeText != null ||
            checkinText != null ||
            checkoutText != null
        ) {
            setSearch({
                site: paisSeleccionado,
                price: priceText,
                size: sizeText,
                checkin: checkinText,
                checkout: checkoutText,
            })
        }
    }, [site, price, size, checkin, checkout])

    return (
        <div className={styles.capsula}>
            <Location site={site} setSite={setSite} />
            <CheckIn checkin={checkin} setCheckin={setCheckin} />
            <CheckOut checkout={checkout} setCheckout={setCheckout} />
            <SizeRoom size={size} setSize={setSize} />
            <PriceRoom price={price} setPrice={setPrice} />
            <LimpiarFiltros limpiar={limpiar} />
        </div>
    )
}

export default Filters
