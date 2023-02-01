import React from 'react';

const List = ({todos}) => {

    return(
        <>
            {todos.map((todo, i) => {
                return <ul>
                    <li index={i}>{todo}</li>
                </ul>
            })}
        </>
    )
}

export default List; 