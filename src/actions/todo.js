export const addTodo = (listId, text) => {
    return {
        type: 'ADD_TODO',
        listId,
        text
    }
};

export const toggleTodo = (listId, id) => {
    return {
        type: 'TOGGLE_TODO',
        listId,
        id
    }
};