import TodoRow from "../todoItem/item.jsx"
import React from "react";

export default function  Todolist({ todos }) {
    return <>
        {todos?.map(todo => {
            return <div>
                {todos?.map(todo => {
                    return <TodoRow key={todo.id} todo={todo} />
                })}
            </div>
        })
        } 
    </>
}