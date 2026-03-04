function StopwatchDisplay({time}) {
    const totalMinutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const totalSeconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const totalMilliseconds = String(Math.floor((time % 1000) / 10)).padStart(2, "0");

    return (
        <div>
            <h2>{totalMinutes}:{totalSeconds}:{totalMilliseconds}</h2>
        </div>
    )
}

export default StopwatchDisplay;