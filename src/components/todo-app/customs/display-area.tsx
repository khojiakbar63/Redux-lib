import { FC, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { Checkbox } from "@mui/material";
import { removeTodo, editTodo } from "../../../redux/features/todo-slice";

const DisplayArea: FC = () => {
  const todos = useSelector((state: any) => state.todo.todos);
  const dispatch = useDispatch();

  // Local state for tracking the todo being edited
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const handleEditStart = (index: number, currentTitle: string) => {
    setEditIndex(index); // Set the index of the todo being edited
    setEditTitle(currentTitle); // Pre-fill the input with the current title
  };

  const handleEditSave = (index: number) => {
    dispatch(editTodo({ index, title: editTitle })); // Dispatch the editTodo action
    setEditIndex(null); // Exit edit mode
    setEditTitle(""); // Clear the input
  };

  return (
    <div className="mt-7 bg-orange-200 min-w-[320px] w-[60vw] rounded-lg shadow-xl py-8 px-16">
      <h2 className="text-[32px] font-bold text-black text-center">Todos</h2>

      {todos.map((todo: any, index: number) => (
        <div key={todo.id} className="flex justify-between items-center mt-4">
          {/* If the todo is being edited, show an input field */}
          {editIndex === index ? (
            <div className="flex items-center">
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="border border-gray-300 rounded-md p-1"
              />
              <button
                onClick={() => handleEditSave(index)}
                className="ml-2 bg-green-500 text-white text-sm px-4 py-2 rounded-md hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditIndex(null)}
                className="ml-2 bg-gray-500 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>
          ) : (
            <p className="text-[22px] text-black">
              <Checkbox checked={todo.completed} />
              <span className="text-blue-500 font-bold">{todo.id}.</span>{" "}
              {todo.title}
            </p>
          )}

          <div className="flex gap-2">
            {/* Delete Button */}
            <button
              onClick={() => dispatch(removeTodo(index))}
              className="bg-red-500 text-white text-[28px] px-4 py-2 rounded-md hover:bg-red-600 active:bg-red-700"
            >
              <MdOutlineDeleteSweep />
            </button>

            {/* Edit Button */}
            {editIndex !== index && (
              <button
                onClick={() => handleEditStart(index, todo.title)}
                className="bg-blue-500 text-white text-[28px] px-4 py-2 rounded-md hover:bg-blue-600 active:bg-blue-700"
              >
                <CiEdit />
              </button>
            )}
          </div>
        </div>
      ))}

      <div className="border-b-2 border-white mt-2 p-2"></div>
    </div>
  );
};

export default DisplayArea;
