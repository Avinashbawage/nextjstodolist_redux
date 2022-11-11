import React from 'react'
// import styles from "../../styles/Header.module.css";
import styles from "../headers/index.module.scss";

const Header = () => {
  return ( <>
    <div className={styles.title}>           
        <h1>Todo App </h1>  
        <h3>New Todo</h3>
    </div>


    </>
  )
}

export default Header