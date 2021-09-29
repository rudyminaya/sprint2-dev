import styles from '../filters.module.css'

const LimpiarFiltros = ({ limpiar }) => {
    return (
        <button className={styles.limpiarFiltros} onClick={limpiar}>
            Limpiar
        </button>
    )
}
export default LimpiarFiltros
