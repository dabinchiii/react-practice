import React, { useState } from 'react';

function HookCounterThree() {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    });

    return (
        <form>
            <input
                type='text' 
                value={name.firstName} 
                onChange={e => 
                    // name 객체의 모든 property를 복사하고 나서 first name만 덮어씀(update)
                    setName({ ...name, firstName: e.target.value })
                    // setName({ firstName: e.target.value }) // lastName property가 사라짐
                } 
            />
            <input
                type='text'
                value={name.lastName} 
                onChange={e => setName({ ...name, lastName: e.target.value })} 
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    );
}

export default HookCounterThree;