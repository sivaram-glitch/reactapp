import { cancelEdit } from '../action/todo';
import { addTodos,setEditMode,CancelEdit } from './sagas'

function* rootsaga(){
    yield[
        addTodos(),
        setEditMode(),
        CancelEdit()
    ]
    
}

export default rootsaga;