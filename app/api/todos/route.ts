
import { NextResponse } from 'next/server'

let todos = [
  { id: 1, text: 'Learn React', completed: false, createdAt: new Date().toISOString() },
  { id: 2, text: 'Learn Next.js', completed: false, createdAt: new Date().toISOString() },
  { id: 3, text: 'Build a Todo App', completed: false, createdAt: new Date().toISOString() },
]

export async function GET() {
  return NextResponse.json(todos)
}

export async function POST(request: Request) {
  const { text } = await request.json()
  const newTodo = {
    id: todos.length + 1,
    text,
    completed: false,
    createdAt: new Date().toISOString(),
  }
  todos.push(newTodo)
  return NextResponse.json(newTodo)
}

export async function PUT(request: Request) {
  const { id, text, completed } = await request.json()
  const todo = todos.find((todo) => todo.id === id)
  if (todo) {
    todo.text = text ?? todo.text
    todo.completed = completed ?? todo.completed
    return NextResponse.json(todo)
  } else {
    return NextResponse.json({ error: 'Todo not found' }, { status: 404 })
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json()
  todos = todos.filter((todo) => todo.id !== id)
  return NextResponse.json({ message: 'Todo deleted' })
}
