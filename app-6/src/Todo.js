import React, {Component} from 'react';

class Todo extends Component {
    render(){
        return <p>{this.props.task}</p>
    }
}

export default Todo;

//responsible for: 
//displaying the individual tasks from App
//receiving a prop from tasks


//....so what is task referring to? in App.js .map is returning Todo with task={element}... what does this mean and what is it doing? 