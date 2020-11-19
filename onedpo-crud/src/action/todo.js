
import { ADD_TODO_ASYNC,REMOVE_TODO,EDIT_TODO, CANCEL_EDIT_MODE } from "./action-types";

export const addTodo = (todo) => ({
  type: ADD_TODO_ASYNC,
  payload: todo,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const editTodo = (id)=>({
  type:EDIT_TODO,
  payload:id

});

export const cancelEdit = (id)=>({
  type:CANCEL_EDIT_MODE,
  payload:id,
});

