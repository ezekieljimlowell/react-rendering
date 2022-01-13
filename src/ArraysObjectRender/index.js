import React from 'react';

export const symbol = Symbol(100);

export default function ArrayAndObject() {
    const animals = ["Elephant", "Jiraffe", "Panda", "Lion", "Tiger"];

    const simpleObj = {
        name: "parents",
        id: 10,
        rollNumber: 123241413,
        favourites: "pasta"
    }

    const nestedObj = {
        one: { id: 1, name: "LivingStone" },
        two: { id: 2, name: "David" },
        three: { id: 3, name: "Vignesh" }
    }

    const arrayOfObj = [
        { id: 1, place: "Chennai", favourites: "beach" },
        { id: 2, place: "Coimbatore", favourites: "good climate" },
        { id: 3, place: "Kanyakumari", favourites: "Sun rise" },
        { id: 4, place: "Tuticorin", favourites: "macros, mascoth and pearl" },
        { id: 5, place: "Madurai", favourites: "jigarthanda" }
    ]

    const arrayOfArray = [["fish", "cat", "dog"], ["fruits", "vegeetable", "berries"], [100,34,213,324]]

    return (
        <>
            {animals.map((animal) => <div key={animal}>{animal}</div>)}
            <h3>
                {Object.keys(simpleObj).map((heading) => <div key={heading}>
                    {heading}: {simpleObj[`${heading}`]}
                </div>
                )}
            </h3>
            {Object.keys(nestedObj).map(header => <div key={nestedObj[header].id}>
                <div>
                    id of {header} is {nestedObj[header].id}
                </div>
                <div>
                    name of {header} is {nestedObj[header].name}
                </div>
            </div>
            )}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Place</th>
                        <th>Favourites</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayOfObj.map(favour =>
                        <tr key={favour.id}>
                            <td>{favour.id}</td>
                            <td>{favour.place}</td>
                            <td>{favour.favourites}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {arrayOfArray.flat().map(word => console.log(word))}
        </>
    )
}