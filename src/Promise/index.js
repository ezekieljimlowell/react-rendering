import React, { useState } from "react";

export const PromiseRendering = () => {
    const [number, setNumber] = useState("");
    const [errorNumber, setErrorNumber] = useState("");
    const [words, setWords] = useState("");
    const [errorWords, setErrorWords] = useState("");

    const promise1 = new Promise((resolve) => resolve(100));
    promise1.then(value => setNumber(value));

    const error1 = new Promise((resolve, reject) => reject("rejected!!"));
    error1.then(value => console.log(value)).catch(error => setErrorNumber(error));

    function resolvePromise() {
        return new Promise((resolve) => resolve("Where are you"))
    }

    resolvePromise().then(value => setWords(value));

    function rejectPromise() {
        return new Promise((resolve, reject) => reject("Whoops!!"))
    }

    rejectPromise().then(val => console.log(val)).catch(error => setErrorWords(error))

    const sum = 10+34;

    return (
        <>
            <div>{number}</div>
            <div>{sum}</div>
            <div>{errorNumber}</div>
            <div>{words}</div>
            <div>{errorWords}</div>
        </>
    )
}