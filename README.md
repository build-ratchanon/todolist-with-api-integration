# Todo List System

This is a simple Todo List web application built with React (Next.js) and TypeScript.

## How to Run

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Thought Process

The goal of this assignment was to build a simple Todo List application with API integration, state management, and proper loading/error states.

### Framework and Language Choice

I chose to use Next.js as the React framework because it provides a great developer experience with features like file-based routing (including API routes), server-side rendering, and a simple setup. TypeScript was used for type safety and to make the code more robust and maintainable.

### API Mocking

Instead of using an external mock API service, I decided to use Next.js API routes to create a mock API. This approach keeps everything within the project and makes it easy to define the API endpoints and data structures. The mock API in `app/api/todos/route.ts` handles `GET`, `POST`, `PUT`, and `DELETE` requests for to-do items.

### State Management

The React Context API was used for state management as requested. I created a `TodoContext` to provide a global state for the to-do list, loading status, and error messages. This context also exposes functions to interact with the API, such as `fetchTodos`, `addTodo`, `updateTodo`, and `deleteTodo`. This approach centralizes the state logic and makes it easy to share the state between different components without prop drilling.

### UI Components

The UI is broken down into three main components:

*   `TodoList`: This component is responsible for fetching and displaying the list of to-do items. It also handles the loading and error states, showing appropriate messages to the user.
*   `TodoItem`: This component represents a single to-do item. It allows the user to edit the text, mark the to-do as complete, and delete it.
*   `AddTodo`: This component provides a simple form to add new to-do items to the list.

### Styling

I used Tailwind CSS for styling, as it was already set up in the project. This allowed me to quickly build a clean and modern UI without writing a lot of custom CSS.

### Error Handling and Loading States

The application displays a "Loading..." message while fetching the to-do items. If an error occurs during the API communication, an error message is displayed to the user. This provides a better user experience by giving feedback on the application's status.