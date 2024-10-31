import styles from "./App.module.css";
import Display from "./components/Display";
import Buttoncontainer from "./components/Buttoncontainer"
import { useState } from "react";

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("")
    }
    else if (buttonText === "CE") {
      setCalVal("")

    }
    else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    }
    else {
      const newDisplay = calVal + buttonText;
      setCalVal(newDisplay);
    }

  }



  return (
    <>
      <h1>
        Calculator
      </h1>
      <center>

        <div className={styles.calculator}>



          <Display calVal={calVal} />

          <Buttoncontainer onButtonClick={onButtonClick} />

        </div>




      </center >
    </>

  )
}

export default App