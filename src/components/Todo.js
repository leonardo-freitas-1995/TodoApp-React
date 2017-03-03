import React from 'react'
import { Glyphicon } from 'react-bootstrap';

export default class Todo extends React.Component {
    render() {
        return (
            <div>{this._checked()} {this.props.text}</div>
        )
    }

    _checked(){
        if (this.props.completed){
            return (<Glyphicon className="green-icon" glyph="ok"/>);
        }
        else{
            return (<Glyphicon glyph="minus"/>);
        }
    }
}