import { connect } from 'react-redux'
import TodoLists from './../components/TodoLists'

const mapStateToProps = (state, ownProps ) => {
    let ids = state.todoLists.map((todoList) => {
        return todoList.id;
    });
    return {
        ids
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const AllTodoLists = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoLists);

export default AllTodoLists