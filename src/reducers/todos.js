import todo from './todo'

export default (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            action.id = state.length + 1;
            return [
                ...state,
                todo(undefined, action)
            ];
        case 'TOGGLE_TODO':
            return state.map((todoObject) => {
                return todo(todoObject, action)
            });
        default:
            return state
    }
}