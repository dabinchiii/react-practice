import React, { useState } from 'react';

function HookCounterFour() {
    const [items, setItems] = useState([]); // empty array로 초기화

    const addItem = () => {
        // old value 복사하고, 새로운 객체 추가
        setItems([ ...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default HookCounterFour;