import styles from '../filters.module.css'
import { FaBed } from 'react-icons/fa'

const SizeRoom = (props) => {
    return (
        <div id="sizeRoom" className={styles.divInput}>
            <label htmlFor="size">
                <FaBed />
            </label>
            <select
                name="size"
                id="size"
                onChange={(e) => {
                    props.setSize(e.target.value)
                }}
                value={props.size}
            >
                <option value={0}>Tamaño</option>
                <option value={1}>Pequeño</option>
                <option value={2}>Mediano</option>
                <option value={3}>Grande</option>
            </select>
        </div>
    )
}
export default SizeRoom
