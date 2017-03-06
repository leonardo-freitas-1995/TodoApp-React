import React from 'react'
import  {Grid, Row, Col, FormGroup, Button, ControlLabel, FormControl} from 'react-bootstrap'

import {TodoList} from './../components/';

export default class TodoLists extends React.Component {
    constructor(){
        super();

        this.state = {
            name: ""
        };
    }

    render() {
        return (
            <Grid>
                <Row>
                    {this._mountTodoLists()}
                    <Col xs={12} md={6} lg={4}>
                        <FormGroup controlId="newTodo">
                            <ControlLabel>Nova lista</ControlLabel>
                            <FormControl
                                type="text"
                                onChange={this._handleInput.bind(this)}
                            />
                        </FormGroup>
                        <Button onClick={this._onAddList.bind(this)} bsStyle="primary">Adicionar</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }

    _handleInput(e){
        this.setState({name: e.target.value});
    }

    _onAddList(){
        this.props.addList(this.state.name);
    }

    _mountTodoLists(){
        return this.props.todoLists.map((todoList, index) => {
            return (
                <Col key={index} xs={12} md={6} lg={4}>
                    <TodoList id={todoList.id} name={todoList.name} todos={todoList.todos}
                              todoClick={this.props.todoClick} addTodo={this.props.addTodo}/>
                </Col>
            )
        })
    }
}