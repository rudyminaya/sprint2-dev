import styles from '../filters.module.css'
import { FaRegCalendarAlt } from 'react-icons/fa'

let time = new Date()

let year = time.getFullYear()

let month = time.getMonth() + 1
if (month <= 9) {
    month = `0${month}`
}

let today = time.getDate()

if (today <= 9) {
    today = `0${today}`
}

let nextDay = time.getDate() + 1
if (nextDay <= 9) {
    nextDay = `0${nextDay}`
}

let tomorrow = year + '-' + month + '-' + nextDay

const CheckOut = (props) => {
    return (
        <div id="dateInit" className={styles.divInput}>
            <label
                htmlFor="checkOut"
                className={`${styles.labelbt} ${styles.labeldate}`}
            >
                <FaRegCalendarAlt />  CheckOut:
            </label>
            <input
                type="date"
                name="checkOut"
                id="checkOut"
                min={tomorrow}
                className={styles.dateInput}
                value={props.checkout}
                onChange={(e) => {
                    props.setCheckout(e.target.value)
                }}
            />
        </div>
    )
}
export default CheckOut
