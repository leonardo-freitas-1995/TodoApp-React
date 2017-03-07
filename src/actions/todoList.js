export const addList = (name) => {
    return {
        type: 'ADD_LIST',
        name
    }
};

export const changeFilter = (id, filter) => {
    return {
        type: 'CHANGE_FILTER',
        id,
        filter
    }
};