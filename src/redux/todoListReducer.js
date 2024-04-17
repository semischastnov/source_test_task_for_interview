const ADD_TODO = 'ADD_TODO'
const COMPLETED_TODO = 'COMPLETED_TODO'
const FILTER_ALL = 'FILTER_ALL'
const FILTER_ACTIVE = 'FILTER_ACTIVE'
const FILTER_COMPLETED = 'FILTER_COMPLETED'
const CLEAR_COMPLETED = 'CLEAR_COMPLETED'

let initialState = {
    todoList: [
        {id: 1, message: 'Get a job as a front-end developer =)', active: true, filter: 'All'},
    ]
}

const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            return {
                ...state,
                todoList: [...state.todoList, {
                    id: state.todoList.length + 1,
                    message: action.newTodoText,
                    active: true
                }]
            }
        }
        case COMPLETED_TODO: {
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.todoId) {
                        return {
                            ...todo,
                            active: false
                        };
                    }
                    return todo;
                })
            }
        }
        case FILTER_ALL: {
            return {
                ...state,
                filter: 'All'
            }
        }
        case FILTER_ACTIVE: {
            return {
                ...state,
                filter: 'Active'
            }
        }
        case FILTER_COMPLETED: {
            return {
                ...state,
                filter: 'Completed'
            }
        }
        case CLEAR_COMPLETED: {
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.active === true)
            }
        }
        default:
            return state;
    }
}

export const addTodoAC = (newTodoText) => ({type: ADD_TODO, newTodoText})
export const completedTodoAC = (todoId) => ({type: COMPLETED_TODO, todoId})
export const filterAllAC = () => ({type: FILTER_ALL})
export const filterActiveAC = () => ({type: FILTER_ACTIVE})
export const filterCompletedAC = () => ({type: FILTER_COMPLETED})
export const clearCompletedAC = () => ({type: CLEAR_COMPLETED})

export const addTodo = (newTodoText) => {
    return (dispatch) => {
        dispatch(addTodoAC(newTodoText));
    };
}
export const filterAll = () =>{
    return (dispatch) => {
        dispatch(filterAllAC())
    }
}
export const filterActive = () =>{
    return (dispatch) => {
        dispatch(filterActiveAC())
    }
}
export const filterCompleted = () =>{
    return (dispatch) => {
        dispatch(filterCompletedAC())
    }
}
export const clearCompleted = () =>{
    return (dispatch) => {
        dispatch(clearCompletedAC())
    }
}
export const completedTodo = (todoId) => {
    return (dispatch) => {
        dispatch(completedTodoAC(todoId));
    };
}


export default todoReducer;