import React, { useEffect, useState } from 'react';

export default function ConditionalRendering() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
        }, 1000);
    }, [count])

    return (
        <>
            {count % 2 === 0 ? <div>{count}</div> : <div style={{color: "blue", fontSize: "25px"}}>{count}</div>}
        </>
    )
}