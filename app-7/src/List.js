import React, { Component } from 'react';
import Todo from './Todo';

class List extends Component {
    render(){
        let list = this.props.tasks.map((element, index) => {
            return <Todo key={index} task={element}/>
        })
        return <div>{list}</div>
    }
}

export default List;

//responsible for displaying the task inside of a task array on the App component in a list-like fashion