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
            console.log(action.id);
            return [
                ...state,
                todoList(undefined, action)
            ];
        default:
            return state
    }
};