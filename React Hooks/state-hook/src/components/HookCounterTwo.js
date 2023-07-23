import React, { useState } from 'react';

function HookCounterTwo(props) {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for(let i = 0; i < 5; i++) {
            // setCount(count + 1); // React의 최적화(batching) => 제대로 작동하지 않음
            setCount(prevCount => prevCount + 1); // old value에 접근하는 방식 (함수형 업데이트)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    );
}

export default HookCounterTwo;