import todos from './todos';

export default (state = [], action) => {
    if (!state.length){
        return [
            {
                id: 1,
                name: "To Study",
                todos: [
                    {
                        id: 1,
                        completed: true,
                        text: "Study JavaScript"
                    },
                    {
                        id: 2,
                        completed: true,
                        text: "Study ECMAScript 6"
                    },
                    {
                        id: 3,
                        completed: true,
                        text: "Study React"
                    },
                    {
                        id: 4,
                        completed: false,
                        text: "Study Redux"
                    }
                ]
            }
        ];
    }
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
        default:
            return state
    }
};