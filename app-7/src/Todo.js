import React, { Component } from 'react';

class Todo extends Component {
    render(){
        return <p>{this.props.task}</p>
    }
}

export default Todo;

//responsible for: 
//displaying the individual tasks from App
//receiving a prop from tasks