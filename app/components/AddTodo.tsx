"use client"

import { useState, useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Button } from './Button'

export const AddTodo = () => {
  const [text, setText] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (text.trim()) {
      addTodo(text)
      setText('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex grow p-4 bg-[#f5f5dc] border-2 border-[#d2b48c] rounded-lg text-[#5d4037] placeholder-[#5d4037] placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-[#d2b48c]"
      />
      <Button
        onClick={() => {}}
        className={`bg-[#d2b48c] hover:bg-[#c1a37e] md:px-4 ${text.trim() ? 'opacity-100' : 'opacity-50 cursor-not-allowed'}`}
      >
        Add
      </Button>
    </form>
  )
}
