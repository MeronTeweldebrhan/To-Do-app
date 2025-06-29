import { TodoProvider } from './context/TodoContext';
import { FilterProvider } from './context/FilterContext';
import { ThemeProvider} from './context/ThemeContext';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import ThemeToggleButton from './components/ThemeToggleButton';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <FilterProvider>
          <ThemeToggleButton />

          <TodoInput />
      <TodoFilter />
      <TodoList />

        </FilterProvider>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;