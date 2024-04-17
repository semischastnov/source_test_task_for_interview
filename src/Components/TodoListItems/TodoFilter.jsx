import React from "react";
import s from '../../App.module.css'

const TodoFilter = ({filterAll, filterActive, filterCompleted, clearCompleted, activeTodosCount}) => {
    return (
        <div className={s.footer}>
            {activeTodosCount} items left
            <button onClick={filterAll} className={s.footerButtonAll}>All</button>
            <button onClick={filterActive} className={s.footerButtonActive}>Active</button>
            <button onClick={filterCompleted} className={s.footerButtonCompleted}>Completed</button>
            <button onClick={clearCompleted} className={s.footerButtonClear}>Clear completed</button>
        </div>
    )
}

export default TodoFilter;