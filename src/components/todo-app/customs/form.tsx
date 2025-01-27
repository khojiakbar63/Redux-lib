import { FC, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineClear } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../../redux/features/todo-slice";

const TodoForm: FC = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(
        addTodo({
          id: todos.length + 1,
          title: newTodo,
          completed: false,
        })
      );
      setNewTodo("");
    }
  };

  const clearInput=()=>{
    setNewTodo("");
}
  return (
    <div className="flex gap-4">
      <input
        className="p-4 w-full bg-transparent outline-none border-b-2 border-red-400 focus:border-b-4 focus:border-red-500"
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={(e: any) => setNewTodo(e.target.value)}
      />
      <button
        className="p-2 h-[40px] border-2 border-red-500 text-[22px] text-red-500 rounded-md hover:bg-red-500 hover:text-white active:bg-red-600 duration-100"
        type="submit"
        onClick={() => handleAddTodo()}
      >
        <IoMdAdd />
      </button>
      <button
        className="p-2 h-[40px] border-2 border-blue-500 text-[22px] text-blue-500 rounded-md hover:bg-blue-500 hover:text-white active:bg-blue-600 duration-100"
        type="submit"
        onClick={clearInput}
      >
        <AiOutlineClear />
      </button>
    </div>
  );
};

export default TodoForm;
