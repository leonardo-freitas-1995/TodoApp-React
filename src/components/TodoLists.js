import React from 'react'
import  {Grid, Row, Col} from 'react-bootstrap'

import {VisibleTodoList} from './../containers/';

export default class TodoLists extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    {this._mountTodoLists()}
                </Row>
            </Grid>
        )
    }

    _mountTodoLists(){
        return this.props.ids.map((id, index) => {
            return (
                <Col key={index} xs={12} md={6} lg={4}>
                    <VisibleTodoList id={id}/>
                </Col>
            )
        })
    }
}