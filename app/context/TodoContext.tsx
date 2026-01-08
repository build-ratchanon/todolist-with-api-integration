"use client"

import { createContext, useState, ReactNode, useCallback, useMemo } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

type FilterType = 'all' | 'completed' | 'incomplete'

interface TodoContextData {
  todos: Todo[]
  loading: boolean
  error: string | null
  fetchTodos: () => void
  addTodo: (text: string) => void
  updateTodo: (id: number, text: string, completed: boolean) => void
  deleteTodo: (id: number) => void
  filter: FilterType
  setFilter: (filter: FilterType) => void
  filteredTodos: Todo[]
  allCount: number
  completedCount: number
  incompleteCount: number
}

export const TodoContext = createContext<TodoContextData>({} as TodoContextData)

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filter, setFilter] = useState<FilterType>('all')

  const fetchTodos = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/todos')
      const data = await response.json()
      setTodos(data)
    } catch (error) {
      setError(`Failed to fetch todos: ${error}`)
    } finally {
      setLoading(false)
    }
  }, [])

  const addTodo = useCallback(async (text: string) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      })
      const newTodo = await response.json()
      setTodos((prevTodos) => [...prevTodos, newTodo])
    } catch (error) {
      setError(`Failed to add todo: ${error}`)
    }
  }, [])

  const updateTodo = useCallback(async (id: number, text: string, completed: boolean) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, text, completed }),
      })
      const updatedTodo = await response.json()
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo))
      )
    } catch (error) {
      setError(`Failed to update todo: ${error}`)
    }
  }, [])

  const deleteTodo = useCallback(async (id: number) => {
    try {
      await fetch('/api/todos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      })
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    } catch (error) {
      setError(`Failed to delete todo: ${error}`)
    }
  }, [])

  const { allCount, completedCount, incompleteCount } = useMemo(() => {
    const allCount = todos.length
    const completedCount = todos.filter((todo) => todo.completed).length
    const incompleteCount = allCount - completedCount
    return { allCount, completedCount, incompleteCount }
  }, [todos])

  const filteredTodos = useMemo(() => {
    const sortedTodos = [...todos].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    if (filter === 'all') {
      return sortedTodos
    }
    if (filter === 'completed') {
      return sortedTodos.filter((todo) => todo.completed)
    }
    if (filter === 'incomplete') {
      return sortedTodos.filter((todo) => !todo.completed)
    }
    return sortedTodos
  }, [todos, filter])

  return (
    <TodoContext.Provider
      value={{
        todos,
        loading,
        error,
        fetchTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        filter,
        setFilter,
        filteredTodos,
        allCount,
        completedCount,
        incompleteCount,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}
