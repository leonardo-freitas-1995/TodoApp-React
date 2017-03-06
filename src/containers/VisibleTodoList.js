import { connect } from 'react-redux'
import { toggleTodo, addTodo } from './../actions'
import TodoList from './../components/TodoList'

const mapStateToProps = (state, ownProps ) => {
    let list = state.todoLists.find((todoList) => {
        return todoList.id = ownProps.id;
    });
    return {
        id: list.id,
        name: list.name,
        todos: list.todos
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        todoClick: (listId, id) => {
            dispatch(toggleTodo(listId, id))
        },
        addTodo: (listId, text) => {
            dispatch(addTodo(listId, text))
        }
    }
};

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default VisibleTodoList