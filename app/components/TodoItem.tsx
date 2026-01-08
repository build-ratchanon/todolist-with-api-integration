"use client"

import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Button } from './Button'
import { format } from 'date-fns'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: string
}

interface TodoItemProps {
  todo: Todo
}

export const TodoItem = ({ todo }: TodoItemProps) => {
  const { updateTodo, deleteTodo } = useContext(TodoContext)
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  const date = format(new Date(todo.createdAt), 'MMM d, yyyy, h:mm a')

  const handleUpdate = () => {
    updateTodo(todo.id, text, todo.completed)
    setIsEditing(false)
  }

  const handleToggle = () => {
    if (!isEditing) {
      updateTodo(todo.id, todo.text, !todo.completed)
    }
  }

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    setIsEditing(!isEditing)
  }

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    deleteTodo(todo.id)
  }

  return (
    <li
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 mb-4 bg-[#f5f5dc] rounded-lg shadow-md transition-all hover:bg-[#eaddc5] cursor-pointer"
      onClick={handleToggle}
    >
      <div className="w-full sm:grow sm:mr-4">
        {isEditing ? (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onBlur={handleUpdate}
            onKeyDown={(e) => e.key === 'Enter' && handleUpdate()}
            onClick={(e) => e.stopPropagation()}
            className="w-full p-2 bg-white border-2 border-[#d2b48c] rounded-lg text-[#5d4037]
              placeholder-[#5d4037] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
          />
        ) : (
          <div>
            <span
              className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-[#5d4037]'}`}
            >
              {todo.text}
            </span>
            <p className="text-xs text-gray-500 mt-1">{date}</p>
          </div>
        )}
      </div>
      <div className="flex gap-2 self-end sm:self-center mt-4 sm:mt-0">
        <Button
          onClick={handleEditClick}
          className="bg-[#d2b48c] hover:bg-[#c1a37e]"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
        <Button
          onClick={handleDeleteClick}
          className="bg-red-700 hover:bg-red-800"
        >
          Delete
        </Button>
      </div>
    </li>
  )
}
