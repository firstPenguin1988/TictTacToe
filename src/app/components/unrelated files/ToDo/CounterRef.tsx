import { useRef, useState } from "react"; 

const CounterRef = () => {
    const [startTime, setStartTime] = useState<number|null>(null); // since it could b either a number or null
    const [now, setNow] = useState<number|null>(null);
    let intervalRef = useRef(0);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current)
        intervalRef.current = window.setInterval(() => {  // use window.setInterval
            setNow(Date.now())
        }, 10);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    let secondsPassed = 0;
    if(startTime !== null && now !== null) {
        secondsPassed = (now - startTime) / 1000;
    }

    return (
        <>
            <h1>Time Passed: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={(handleStop)}>Stop</button>
        </>
        
    )
}

export default CounterRef;