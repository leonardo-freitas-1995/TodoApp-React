import React from 'react'
import { ListGroup, ListGroupItem , Badge, FormGroup, Button, FormControl, Row, Col} from 'react-bootstrap';

import Todo from './Todo';

export default class TodoList extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: ""
        };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm={12} md={6} lg={8}>
                        <h3>{this.props.name} {this._mountBadge()}</h3>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <br/>
                        <FormGroup controlId="formControlsSelect">
                            <FormControl componentClass="select" placeholder="Filtro" onChange={this._handleSelect.bind(this)}>
                                <option value="SHOW_ALL">Todos</option>
                                <option value="SHOW_COMPLETED">Completos</option>
                                <option value="SHOW_ACTIVE">Ativos</option>
                            </FormControl>
                        </FormGroup>
                    </Col>
                </Row>
                <ListGroup>
                    {this._mountTodos()}
                </ListGroup>
                <FormGroup controlId="newTodo">
                    <FormControl
                        type="text"
                        onChange={this._handleInput.bind(this)}
                    />
                </FormGroup>
                <Button onClick={this._onAddTodo.bind(this)}>Adicionar</Button>
            </div>
        )
    }

    onClickTodo(todoId){
        this.props.todoClick(this.props.id, todoId);
    }

    _onAddTodo(){
        this.props.addTodo(this.props.id, this.state.text);
    }

    _handleInput(e){
        this.setState({text: e.target.value});
    }

    _handleSelect(e){
        this.props.changeFilter(this.props.id, e.target.value);
    }

    _mountTodos(){
        if (this.props.todos){
            return this._getVisibleTodos(this.props.todos, this.props.filter)
                .map((todo, index) => {
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

    _mountBadge(){
        if (this._uncompletedTodos() > 0){
            return (<Badge>{this._uncompletedTodos()} new</Badge>);
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

    _getVisibleTodos(todos, filter){
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
}