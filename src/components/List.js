import React from 'react';
import '../App.css';

const List = ({todos}) => {

    return(
        <>
            {todos.map((todo, i) => {
                return <ul>
                    <li index={i} className="todo-item">{todo}</li>
                </ul>
            })}
        </>
    )
}

export default List; 