import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import axios from "axios";

export const AsyncAndAwait = () => {
    const [todos, setTodos] = useState([]);
    const [error, setError] = useState(null);
    const API_URL = "https://jsonplaceholder.typicode.com/todos";

    const extractData = async () => {
        /*const response = await fetch(API_URL);
        const task = await response.json();
        return task;*/

        const task = await axios(API_URL);
        return task.data;
    }

    useEffect(() => {
        extractData().then(data => setTodos(data)).catch(error => setError(error))
    })

    return (
        <>
            {todos.length > 0 && todos.map((task) => <div key={task.id}>{task.title}</div>)}
            {error}
        </>
    )
}