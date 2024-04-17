import React from 'react';
import s from './App.module.css';
import TodoListItemsContainer from "./Components/TodoListItems/TodoListItemsContainer";

function App() {
    return (
            <div className={s.todoContainer}>
                <TodoListItemsContainer/>
            </div>
    );
}

export default App;