import React from 'react'
import { ListGroup, ListGroupItem , Badge} from 'react-bootstrap';

import Todo from './Todo';

export default class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name} <Badge>{this._uncompletedTodos()} new</Badge></h3>
                <ListGroup>
                    {this._mountTodos()}
                </ListGroup>
            </div>
        )
    }

    onClickTodo(todoId){
        this.props.todoClick(this.props.id, todoId);
    }

    _mountTodos(){
        if (this.props.todos){
            return this.props.todos.map((todo, index) => {
                return (
                    <ListGroupItem key={index} onClick={this.onClickTodo.bind(this, todo.id)}>
                        <Todo id={todo.id} completed={todo.completed} text={todo.text}/>
                    </ListGroupItem>

                )
            })
        }
        else{
            return  (
                <div>No Todo</div>
            )
        }
    }

    _uncompletedTodos(){
        let total = 0;
        for (let todo of this.props.todos){
            if (!todo.completed){
                total++;
            }
        }
        return total;
    }
}