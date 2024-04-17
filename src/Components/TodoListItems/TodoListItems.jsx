import s from "../../App.module.css";
import React from 'react';
//import React, {useState} from 'react'; //при необходимости React Hooks, но у меня как-то без него получилось
import AddTodoFormik from "./AddTodoFormik";
import Todo from "./Todo";
import TodoFilter from "./TodoFilter";

const TodoListItems = (props) => {
    //const [state, setState] = useState(props.todoListProps);//при необходимости React Hooks, но у меня как-то без него получилось
    let state = props.todoListProps
    let activeTodosCount = state.todoList.filter(todo => todo.active).length;

    let filteredTodoList = state.todoList;

    if (state.filter === 'Active') {
        filteredTodoList = state.todoList.filter(todo => todo.active === true);
    } else if (state.filter === 'Completed') {
        filteredTodoList = state.todoList.filter(todo => todo.active === false);
    }

    let todoElements = filteredTodoList.map(t => <Todo
        id={t.id}
        message={t.message}
        active={t.active}
        key={t.id}
        completedTodo={props.completedTodo}/>);

    let addTextTodo = (values, {resetForm}) => {
        props.addTodo(values.newTodoText)
        resetForm();
    }

    return (
        <div className={s.todoList}>
            <h1>todos</h1>
            <AddTodoFormik handleSubmit={addTextTodo} createTextValidationSchema={props.createTextValidationSchema}/>
            {todoElements}
            <TodoFilter filterAll={props.filterAll}
                        filterActive={props.filterActive}
                        filterCompleted={props.filterCompleted}
                        clearCompleted={props.clearCompleted}
                        activeTodosCount={activeTodosCount}/>
        </div>
    )
}

export default TodoListItems;