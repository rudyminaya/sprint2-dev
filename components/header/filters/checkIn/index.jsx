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

let todayDate = year + '-' + month + '-' + today

const CheckIn = (props) => {
    return (
        <div id="dateInit" className={styles.divInput}>
            <label
                htmlFor="checkIn"
                className={(styles.labelbt, styles.labeldate)}
            >
                <FaRegCalendarAlt />
                  CheckIn:
            </label>
            <input
                type="date"
                name="checkIn"
                id="checkIn"
                min={todayDate}
                className={styles.dateInput}
                value={props.checkin}
                onChange={(e) => {
                    props.setCheckin(e.target.value)
                }}
            />
        </div>
    )
}
export default CheckIn
