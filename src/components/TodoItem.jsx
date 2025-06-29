import { useState } from "react";
import { useTodos } from "../context/TodoContext";

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTodo(todo.id, editText.trim());
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex items-center justify-between  py-1">
      <input
      className="ms-200"
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      {isEditing ? (
        <input
          className="bg-gray-800 text-white rounded px-2 py-1"
          value={editText}
          onChange={e => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={e => {
            if (e.key === "Enter") handleEdit();
          }}
          autoFocus
        />
      ) : (
        <span
          className={`flex-1 ${todo.completed ? "line-through text-gray-400" : ""}`}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <button
        className="mr-10 text-xs bg-yellow-500 text-white rounded px-2 py-1"
        onClick={handleEdit}
      >
        {isEditing ? "Save" : "Edit"}
      </button>
      <button
        className="mr-150 text-xs bg-red-500 text-white rounded px-2 py-1"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
