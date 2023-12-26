import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            todo : "New Task",
            id : 1,
            isCompleted : false
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (todo , id) => {},
    deleteTodo : (id) => {} ,
    toggleComplete : (id) => {}
})


export  default function useTodo() {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

