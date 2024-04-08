import { useState } from "react";

// Custom Hook
export const useCounter = ( initialValue = 0 ) => {

    // State
    const [counter, setCounter] = useState( initialValue );

    // funcion de incremento
    const increment = () => {
        setCounter( counter + 1 );
    }

    // funcion de decremento
    const decrement = () => {
        setCounter( counter -1 );
    }

    // funcion de reset
    const reset = () => {
        setCounter( initialValue );
    }

    return {
        counter,
        increment,
        decrement,
        reset,
    }

}