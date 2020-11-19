import React from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";

import DeleteIcon from '@material-ui/icons/Delete';

//redux
import { connect } from "react-redux";
import { removeTodo,editTodo } from "../action/todo";



const Todo = ({ todos, markComplete,editTodo }) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {todos.map((todo) => (
        <ListGroupItem key={todo.id}>
          {todo.title}
          
          <span onClick={() => markComplete(todo.id)} className="float-right">
            <DeleteIcon />
          </span>
          <span className="float-right">
          <Button color="primary" onClick={()=> editTodo(todo.id)}>
              EDIT
          </Button>
            
          </span>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
    dispatch(editTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
