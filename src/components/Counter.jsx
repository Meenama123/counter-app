// Counter.jsx
import { useState } from 'react';

function Counter() {
    // Create the state variable (initial value is 0)
    const [count, setCount] = useState(0);

    // The Event Handler
    // This function runs ONLY when the button is clicked
    const handleIncrease = () => {
        // We pass the new value to the setter
        setCount(count + 1);
    };
    const handleDecrease = () => {
        setCount(count - 1);
    };
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div className="counter-card">
            <h1>Counter App</h1>

            <div className="button-group">
                <button className="btn-increase" onClick={handleIncrease}>+</button>
            </div>

            {/* Display the state variable */}
            <h2 className="counter-number">{count}</h2>

            <div className="button-group">
                <button className="btn-decrease" onClick={handleDecrease}>-</button>
            </div>

            <button className="reset-btn" onClick={handleReset}>Reset</button>
        </div>
    );
}

export default Counter;