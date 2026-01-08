# Todo List System

A feature-rich Todo List web application built with Next.js, React, and TypeScript, featuring a responsive, earth-toned design.

## Features

- **Full CRUD Functionality:** Add, edit, and delete your to-do items.
- **Status Toggling:** Mark items as complete or incomplete with a single click on the item.
- **Timestamped & Sorted:** Each to-do is automatically timestamped upon creation and the list is sorted to show the newest items first.
- **Status Filtering:** Filter the list to view "All", "Completed", or "Incomplete" todos using a dropdown menu.
- **Item Counts:** The filter bar conveniently displays the total number of to-dos.
- **Responsive Design:** The layout is optimized for both desktop and mobile devices.
- **User-Friendly Feedback:** Includes a loading spinner during data fetching and a message for empty states.

## How to Run

1.  **Install dependencies:**
    ```bash
    yarn install
    ```
2.  **Run the development server:**
    ```bash
    yarn dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technical Details

The goal of this project was to build a robust Todo List application that was both functional and aesthetically pleasing.

### Framework and Language Choice

Next.js was chosen as the React framework for its powerful features like API routes and server-side rendering. TypeScript was used to ensure type safety and improve code maintainability.

### API Mocking

A mock API was created using Next.js API routes to simulate a real backend. The API in `app/api/todos/route.ts` handles `GET`, `POST`, `PUT`, and `DELETE` requests and now includes a `createdAt` timestamp for each to-do.

### State Management

The React Context API centralizes the application's state in `app/context/TodoContext.tsx`. This includes the list of to-dos, loading/error states, and the current filter status. The context uses `useMemo` to efficiently derive the sorted and filtered list.

### UI Components

The UI is broken down into several reusable components:

-   `TodoList` & `TodoItem`: Display the list of to-dos and handle individual item interactions.
-   `AddTodo`: Provides the form for adding new items.
-   `FilterBar`: A dropdown menu for filtering to-dos by status and displaying the total count.
-   `Button`: A reusable button component for consistent styling.
-   `LoadingSpinner`: A custom loading spinner displayed during data fetching, built with Tailwind CSS.

### Styling

The application is styled using Tailwind CSS. The design features a calming, responsive, earth-tone palette.

### Dependencies

-   `date-fns`: Used to format the creation timestamp of each to-do item into a user-friendly, relative time.
