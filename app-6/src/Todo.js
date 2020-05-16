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

// task={element} is simply a prop. task is the prop name, and element is the prop value.

// Props look a lot like html attributes (<img src=’string’ /> src is an html attribute in this case), but they are for our custom components. <Todo /> is not a native jsx/html element, it’s a custom React component, so any props that we pass to the <Todo /> will look similar to how we pass attributes to jsx/html elements.
