"use client"

import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

type FilterType = 'all' | 'completed' | 'incomplete'

export const FilterBar = () => {
  const { filter, setFilter, allCount } = useContext(TodoContext)

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as FilterType)
  }

  return (
    <div className="flex items-center justify-between mb-8">
      <p className="text-lg text-[#5d4037]">
        Total Todos: <span className="font-semibold">{allCount}</span>
      </p>
      <div className="relative">
        <select
          value={filter}
          onChange={handleFilterChange}
          className="appearance-none p-2 pr-8 bg-[#d2b48c] border-2 border-[#c1a37e] rounded-lg text-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#a0522d] cursor-pointer"
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  )
}
