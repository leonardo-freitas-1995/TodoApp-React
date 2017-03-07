import { connect } from 'react-redux'
import { addList, toggleTodo, addTodo, changeFilter  } from './../actions/'
import TodoLists from './../components/TodoLists'

const mapStateToProps = (state, ownProps ) => {
    return {
        todoLists: state.todoLists
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addList: (name) => {
            dispatch(addList(name));
        },
        todoClick: (listId, id) => {
            dispatch(toggleTodo(listId, id));
        },
        addTodo: (listId, text) => {
            dispatch(addTodo(listId, text));
        },
        changeFilter: (listId, filter) => {
            dispatch(changeFilter(listId, filter));
        }
    }
};

const AllTodoLists = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoLists);

export default AllTodoLists