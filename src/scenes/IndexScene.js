import React from 'react';

import {AllTodoLists} from './../containers/';

class IndexScene extends React.Component{
    render(){
        return (
            <div>
                <h1 className="center-align">Bem vindo ao TodoApp</h1>
                <hr/>
                <AllTodoLists/>

            </div>
        )
    }

}

export default IndexScene;