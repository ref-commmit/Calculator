import React from 'react'
import styles from "./Display.module.css";


const Display = (calVal) => {
    return (
        <div>
            <input className={styles.dis} type="text" value={calVal.calVal} readOnly ></input>
        </div>
    )
}

export default Display
