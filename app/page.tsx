import { TodoProvider } from './context/TodoContext'
import { AddTodo, FilterBar, TodoList } from './components'

export default function Home() {
  return (
    <TodoProvider>
      <div className="flex min-h-screen items-center justify-center font-sans">
        <main className="w-full max-w-3xl p-4 sm:p-8 bg-white bg-opacity-50 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-8 text-[#5d4037]">Todo List</h1>
          <AddTodo />
          <FilterBar />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  )
}
