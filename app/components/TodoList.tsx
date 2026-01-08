"use client"

import { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { TodoItem } from './TodoItem'
import { LoadingSpinner } from './LoadingSpinner'

export const TodoList = () => {
  const { filteredTodos, loading, error, fetchTodos } = useContext(TodoContext)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    }, 0)
    fetchTodos()
  }, [fetchTodos])

  if (!isMounted) {
    return <LoadingSpinner />
  }

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <div className="text-center p-4">{error}</div>
  }

  if (filteredTodos.length === 0) {
    return <div className="text-center p-4 text-[#5d4037]">
      No todos found.
    </div>
  }

  return (
    <ul className="max-h-96 overflow-y-auto">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  )
}
