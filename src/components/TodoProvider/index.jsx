import { createContext, useEffect, useState } from "react";

const TodoContext = createContext();
const TODOS = 'todos';

export function TodoProvider({ children }) {

  const savedTodosList = localStorage.getItem(TODOS)

  const [todos, setTodos] = useState(savedTodosList ? JSON.parse(savedTodosList) : [])

  useEffect(() => {
    localStorage.setItem(TODOS, JSON.stringify(todos))
  }, [todos])

  const addTodo = (formData) => {
    const description = formData.get('description')
    setTodos(prevState => {
      const todo = {
        id: prevState.length + 1,
        description,
        completed: false,
        createdAt: new Date().toISOString()
      }
      return [...prevState, todo]
    })
  }

  const toggleTodoCompleted = (todo) => {
    setTodos(prevState => {
      return prevState.map(t => {
        if (t.id == todo.id) {
          return {
            ...t,
            completed: !t.completed
          }
        }
        return t
      })
    })
  }

  const removeTodo = (todo) => {
    setTodos(prevState => {
      return prevState.filter(t => t.id !== todo.id)
    })
  }

  return (
    <TodoContext
      value={{
        todos,
        addTodo,
        toggleTodoCompleted,
        removeTodo
      }}
    >
      {children}
    </TodoContext>
  )
}

export default TodoContext