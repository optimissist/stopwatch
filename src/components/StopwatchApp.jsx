import {useState, useEffect, useRef} from "react";
import StopwatchDisplay from "./StopwatchDisplay";

function StopwatchApp() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    function start() {
        setIsRunning(true);
        intervalRef.current = setInterval(() => setTime(t => t + 10), 10);
    }

    function pause() {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    }

    function reset() {
        setIsRunning(false);
        setTime(0);
        clearInterval(intervalRef.current);
    }
    
        useEffect(() => {
        if (isRunning) {
            return () => clearInterval(intervalRef);
        }
    }, [isRunning]);

    return (
        <div>
            <h1>Stopwatch</h1>
            <StopwatchDisplay 
            time={time}/>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default StopwatchApp;