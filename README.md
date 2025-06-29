# To-Do App
A modern, persistent, and themeable To-Do application built with React, Context API, and custom hooks.

## Features
- Add, edit, delete, and toggle todos
- Filter todos by All, Active, or Completed
- Clear completed todos
- Theme switching (Light/Dark mode)
- State persistence using localStorage
- Responsive UI with Tailwind CSS


## Folder Structure
```
src/
  components/
    TodoInput.jsx
    TodoList.jsx
    TodoItem.jsx
    TodoFilter.jsx
    ThemeToggleButton.jsx
  context/
    TodoContext.jsx
    FilterContext.jsx
    ThemeContext.jsx
  hooks/
    UseLocalStorage.js
  App.jsx
  index.css
  main.jsx
  ```

  ## Usage
  ``
  npm install
  npm run dev
  ``
  ## How It Works
- Todos and theme are stored in localStorage for persistence.
- Context API is used for global state management (todos, filter, theme).
- Custom hook useLocalStorage syncs state with localStorage automatically.
- Theme toggle updates the root HTML class for dark mode support.

## Customization

- Edit ThemeContext.jsx to change theme logic.
- Edit TodoContext.jsx to change todo logic.
- Style with Tailwind or your own CSS.