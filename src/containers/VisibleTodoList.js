import { connect } from 'react-redux'
import { toggleTodo } from './../actions'
import TodoList from './../components/TodoList'

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed);
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const mapStateToProps = (state, ownProps ) => {
    let list = state.todoLists.find((todoList) => {
        return todoList.id = ownProps.id;
    });
    return {
        id: list.id,
        name: list.name,
        todos: getVisibleTodos(list.todos, 'SHOW_ALL')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        todoClick: (listId, id) => {
            dispatch(toggleTodo(listId, id))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList