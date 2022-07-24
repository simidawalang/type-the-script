import { useEffect } from "react";

interface TimerProps {
    duration: string | number;
}

const Timer = ({duration}: TimerProps) => {
   

    return (<>
    
    <h3>TIMER: {duration}s</h3>
    </>
    );
}

export default Timer;