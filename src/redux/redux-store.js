import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import todoListReducer from "./todoListReducer";
import {thunk} from "redux-thunk";

let reducers = combineReducers({
    todoStore: todoListReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
window.__store__ = store;

export default store;

