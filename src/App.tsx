import { FC } from "react";
import CounterApp from "./components/counter-app";
import ThemeApp from "./components/theme-app";
import TodoApp from "./components/todo-app";

const App: FC = () => {
  return (
    <div>
      {/* TodoApp */}
      <TodoApp />
      
      {/* CounterApp */}
      <CounterApp />

      {/* ThemeApp */}
      <ThemeApp />

    </div>
  );
};

export default App;
