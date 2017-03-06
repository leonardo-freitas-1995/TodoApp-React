export default (state = {}, action) => {
    switch(action.type){
        case 'ADD_LIST':
            return {
                id: action.id,
                name: action.name,
                todos: []
            };
        default:
            return state
    }
}