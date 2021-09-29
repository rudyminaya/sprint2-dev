import styles from '../filters.module.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Location = (props) => {
    return (
        <div id="ubicacion" className={styles.divInput}>
            <label htmlFor="ubicaciones" className={styles.labelbt}>
                <FaMapMarkerAlt />
            </label>
            <select
                name="ubicaciones"
                id="ubicaciones"
                onChange={(e) => {
                    props.setSite(e.target.value)
                }}
                value={props.site}
            >
                <option value={0}>Ubicación</option>
                <option value={1}>Argentina</option>
                <option value={2}>Brasil</option>
                <option value={3}>Chile</option>
                <option value={4}>Uruguay</option>
            </select>
        </div>
    )
}
export default Location
