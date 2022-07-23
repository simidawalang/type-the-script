import { useEffect } from "react";

interface TimerProps {
    duration: string | number;
}

const Timer = ({duration}: TimerProps) => {
    useEffect(() => {
        const interval = setInterval(() => {
           console.log(duration)
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (

        <p>{duration}</p>
    );
}

export default Timer;