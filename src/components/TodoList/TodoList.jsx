import React from 'react'



const TodoList = (props) => {
    
    return (
        <ul>
        <h3>Todo List</h3>
           {props.list}
        </ul>
    )
}

export default TodoList

