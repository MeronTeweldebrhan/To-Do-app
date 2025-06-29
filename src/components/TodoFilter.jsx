
import { useFilter } from "../context/FilterContext";

function TodoFilter() {
  const { filter, setFilter } = useFilter();

  return (
    <div className="flex gap-2 my-4 justify-center">
      <button
        className={`px-3 py-1 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`px-3 py-1 rounded ${filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`px-3 py-1 rounded ${filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  );
}

export default TodoFilter;
