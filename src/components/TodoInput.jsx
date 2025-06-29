import { useTodos } from "../context/TodoContext";
import { useState } from "react";
function TodoInput() {
  const [text, setText] = useState("");
  const { addTodo } = useTodos();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim());
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4 justify-center">
      <input
        className="  rounded px-2 py-1"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button className="bg-blue-500 text-white rounded px-4 py-2" type="submit">
        Add
      </button>
    </form>
  );
}

export default TodoInput;
