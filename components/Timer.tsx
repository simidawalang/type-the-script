import { useEffect } from "react";

interface TimerProps {
    duration: string | number;
}

const Timer = ({duration}: TimerProps) => {
   

    return (<>
    
    <h3>TIMER</h3>
        <p>{duration}s</p></>
    );
}

export default Timer;