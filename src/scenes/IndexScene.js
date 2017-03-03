import React from 'react';
import {Link} from 'react-router';
import {Grid, Row, Col} from 'react-bootstrap';

import {VisibleTodoList} from './../containers/';

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

    _mountTodoLists(){
        return (
            <Col xs={12} md={6} lg={4}>
                <VisibleTodoList id={1}/>
            </Col>
        )
    }
}

export default IndexScene;