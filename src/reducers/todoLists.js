import todos from './todos';
import todoList from './todoList';

export default (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
        case 'TOGGLE_TODO':
            return state.map((list) =>{
                if (action.listId !== list.id){
                    return list;
                }

                return Object.assign({}, list, {
                    todos: todos(list.todos, action)
                });
            });
        case 'ADD_LIST':
            action.id = state.length + 1;
            return [
                ...state,
                todoList(undefined, action)
            ];
        case 'CHANGE_FILTER':
            return state.map((todoListObject) => {
                if (action.id !== todoListObject.id){
                    return todoListObject;
                }
                return todoList(todoListObject, action)
            });
        default:
            return state
    }
};