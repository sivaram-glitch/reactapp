import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';

import {

  FormGroup,
  Input,
  Form,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import { v4 } from "uuid";

//redux
import { connect } from "react-redux";
import { addTodo } from "../action/todo";


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const TodoForm = ({ addTodo }) => {
  const classes = useStyles();

  const [title, setTitle] = useState("");

  const handleSubmit = () => {
  
    if (title === "") {
      return alert("Please add a todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);

    setTitle("");
  };

  return (
    <Form >
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Your next Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputGroupAddon addonType="prepend">
          <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick= {() => handleSubmit()}
      >
        Save
      </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
