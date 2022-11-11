import React, { useState } from "react";
  
import { addTodo } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'

import styles from "../inputs/index.module.scss";

const InputSec = ( ) => {
  const dispatch = useDispatch();

  const [value, setInputValue] = useState("");
 
 console.log("this is the state", value )

  return (
    <div>
      <div className={styles.inputs}>
        <input
          className={styles.input_text}
          placeholder="Write"
          value={value}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
          onKeyPress={(e) => e.key === 'Enter' && dispatch(addTodo(value), setInputValue("") ) }
        />
        <button className={styles.add_btn} onClick={() => dispatch(addTodo(value), setInputValue(""))}  >
          +
        </button>
      </div>
      
     
    </div>
  );
};

export default InputSec;
