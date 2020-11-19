
import { createStore, applyMiddleware,combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./sagas/rootsaga";
import todos from "./reducer/todo"


const rootReducer=combineReducers({
    todos, 
});
const SagaMiddleware=createSagaMiddleware();
const store=createStore(rootReducer,applyMiddleware(SagaMiddleware));
SagaMiddleware.run(rootsaga);
export default store;
