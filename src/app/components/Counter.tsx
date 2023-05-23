"use client";
import React, { useState } from "react";
import Styles from "./counter.module.css"

const  Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prev => prev + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button className={Styles.btn} onClick={() => increment}>increment</button>
        </>
    )
}

export default Counter