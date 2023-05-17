 /*
    Instructions:
    Create a React component called "Counter" that displays a number and two buttons. 
    The number starts at 0 and can be incremented or decremented by clicking the buttons. 
    The component should have the following features:

    1. Display the number with <h1> element
    2. Can Increment number by 3
    3. Can Decrement number by 1
    4. Number cannot be below 0 
    5. You can use either functional component or class component. 
 */
import React, { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const incrementNumber = () => {
        setCount(count + 1);
    }

    const decrementNumber = () => {
        setCount(count > 0 ? count - 1 : 0);
    }

    return (
        <div className="counter-container">
            <h1>Count: {count}</h1>

            <button onClick={incrementNumber}>Increment</button>
            <button onClick={decrementNumber}>Decrement</button>
        </div>
    );
}

export default Counter;