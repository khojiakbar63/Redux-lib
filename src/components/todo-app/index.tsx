import { FC } from "react";
import TodoForm from "./customs/form";
import DisplayArea from "./customs/display-area";


const TodoApp: FC = () => {
  return (
    <div className="h-screen bg-red-500 grid place-content-center font-mono">
      <div className="bg-gray-200 min-w-[320px] w-[60vw] rounded-lg shadow-xl py-8 px-16 ">
        <h1 className="text-4xl font-bold text-center py-4">Add Todo</h1>
        <TodoForm />
      </div>
      <div className="bg-red-300 min-w-[320px] w-[60vw] rounded-lg shadow-xl py-[1px] px-16 mt-4"></div>
      <DisplayArea />
    </div>
  );
};

export default TodoApp;
