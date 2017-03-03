import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

import {TodoList} from './../components/';

class IndexScene extends React.Component{
    constructor(){
        super();

        this.state = {
            todoLists: []
        }
    }
    render(){
        return (
            <div>
                <h1 className="center-align">Bem vindo ao TodoApp</h1>
                <hr/>
                <Grid>
                    <Row>
                        {this._mountTodoLists()}
                    </Row>
                </Grid>

            </div>
        )
    }

    onClickTodo(listId, todoId){
        let todoLists = this.state.todoLists;
        let todo = todoLists[listId - 1].todos[todoId - 1];

        todo.completed = !todo.completed;
        this.setState({todoLists});
    }

    componentWillMount(){
        this.setState({todoLists: [
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
        ]})
    }

    _mountTodoLists(){
        return this.state.todoLists.map((todoList, index) => {
            return (
                <Col key={index} xs={12} md={6} lg={4}>
                    <TodoList id={todoList.id} todos={todoList.todos} name={todoList.name} todoClick={this.onClickTodo.bind(this)}/>
                </Col>
            )
        })
    }
}

export default IndexScene;