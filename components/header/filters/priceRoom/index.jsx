import styles from '../filters.module.css'
import { FaDollarSign } from 'react-icons/fa'

const PriceRoom = (props) => {
    return (
        <div id="priceRoom" className={styles.divInput}>
            <label htmlFor="price">
                <FaDollarSign />
            </label>
            <select
                name="price"
                id="price"
                onChange={(e) => {
                    props.setPrice(e.target.value)
                }}
                value={props.price}
            >
                <option value={0}>Todos</option>
                <option value={1}>Económico</option>
                <option value={2}>Confort</option>
                <option value={3}>Lujoso</option>
                <option value={4}>Magnifico</option>
            </select>
        </div>
    )
}
export default PriceRoom
