import React from 'react'
import styles from "./Buttoncontainer.module.css"


const Buttoncontainer = ({ onButtonClick }) => {

    const buttonNames = ['C', 'CE', '*', '/', '-', `+`, '1', '2', '3', '4', '5', '5', '6', '7', '8', '9', '0', '=']


    return (
        <div className={styles.buttonContainer}>
            {buttonNames.map(buttonName => <button className={styles.btn} onClick={() => onButtonClick(buttonName)}>{buttonName} </button>)}


        </div>
    )
}

export default Buttoncontainer
