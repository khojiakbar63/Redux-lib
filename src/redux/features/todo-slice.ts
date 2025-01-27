import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn Redux Toolkit",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: any, action) => {
      state.todos.push(action.payload);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((index) => index !== action.payload);
    },

    editTodo: (state, action) => {
      state.todos = state.todos.map((todo, index) => {
        if (index === action.payload.index) {
          return {
            ...todo,
            title: action.payload.title,
          };
        }
        return todo;
      });
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
