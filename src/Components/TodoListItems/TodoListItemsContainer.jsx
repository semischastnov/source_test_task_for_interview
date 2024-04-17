import React from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import TodoListItems from "./TodoListItems";
import {
    addTodo, clearCompleted,
    completedTodo,
    filterActive,
    filterAll,
    filterCompleted
} from "../../redux/todoListReducer";
import {createTextValidationSchema} from "../../utils/validators/validators";

const SignupSchema = createTextValidationSchema
let mapStateToProps = (state) => {
    return {
        todoListProps: state.todoStore,
        createTextValidationSchema: SignupSchema
    }
}

const TodoListItemsContainer = compose(
    connect(mapStateToProps, {
        addTodo,
        completedTodo,
        filterAll,
        filterActive,
        filterCompleted,
        clearCompleted
    })
)(TodoListItems);

export default TodoListItemsContainer;