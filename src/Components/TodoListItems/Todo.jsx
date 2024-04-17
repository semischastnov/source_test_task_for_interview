import React from "react";
import s from "./../../App.module.css";

import {Button} from "@mui/material";


const Todo = (props) => {

    const handleCompleteTodo = (id) => {
        props.completedTodo(id);
    };
    return (
        <div className={props.active === true ? s.activeTodo : s.noActiveTodo}>
            <Button>
                <Button onClick={() => handleCompleteTodo(props.id)}>{props.active === true ? '◯' : '✔'}</Button>
                <div className={props.active === true ? null : s.decoration}>{props.message}</div>
            </Button>
        </div>
    );
}


export default Todo;
