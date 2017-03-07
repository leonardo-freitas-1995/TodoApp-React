export default (state = {}, action) => {
    switch(action.type){
        case 'ADD_LIST':
            return {
                id: action.id,
                name: action.name,
                filter: "SHOW_ALL",
                todos: []
            };
        case 'CHANGE_FILTER':
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state
    }
}