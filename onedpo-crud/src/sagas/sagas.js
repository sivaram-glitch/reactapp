import {takeEvery,put} from 'redux-saga/effects'
import { CancelDEdit } from './sagas';

function* addAsync(action){
    yield put({type:'ADD_TODO_ASYNC',value:action.value});

}
function* editTodos(action){
    yield put({ type: 'SET_EDIT_MODE', value:{userId: action.value, editMode: true}});
} 

function* CancelUserUpdate(action){
    yield put({ type: 'CANCEL_EDIT_MODE', value:{userId: action.value, editMode: false}});
}


export function* addTodos(){
    yield takeEvery('ADD_TODO',addAsync);

}


export function* setEditMode(){
    yield takeEvery('EDIT_TODO',editTodos)
}

export const CancelEdit = function* () {
    yield takeEvery('CANCEL_EDIT', CancelUserUpdate);
  }






