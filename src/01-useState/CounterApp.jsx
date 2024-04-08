import { useState } from "react";

// Componente
export const CounterApp = () => {

    // State
    const [counter, setCounter] = useState(10);

    // JSX
    return (
        <>
            <h1>Counter: { counter }</h1>
            <hr />

            <button className="btn btn-primary" onClick={ () => setCounter( counter + 1 ) }>+1</button>
            <button className="btn btn-danger"  onClick={ () => setCounter( counter - 1 ) }>-1</button>

        </>
    )
}
