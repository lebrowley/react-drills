import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';
import Image from './Image';

class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ""
    }
    this.handleAddTask= this.handleAddTask.bind(this)
  }

  handleInputChange(value){
    this.setState({input: value})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
  }

  render(){
    let list = this.state.list.map((element, index) => {
      return <Todo key={index} task={element}/>
    })
    return(
      <div className="App">
        <h1>My To-Do List</h1>

        <div>
          <input 
          value={this.state.input}
          placeholder="enter new task"
          onChange={ (e) => this.handleInputChange(e.target.value)}
          />
          <button onClick={this.handleAddTask}>Add</button>
        </div>

        <br/>

        {list}

        <br/>

        <Image url="https://static1.squarespace.com/static/52e1b262e4b06ef060506756/57bc22d9725e25f9d008b59f/5d7a80ff32891970bb9bb4db/1588005635063/Hero.jpg?format=1500w"/>
        
      </div>
    )
  }
}

export default App;



//responsible for: 
//getting new tasks
//storing the list of tasks
//passing a task into the Todo component as a prop


//we've done something like this but just with plain old javascript. how did we do this before and how does it compare to doing it with react? 

//what if you wanted to make a list and then save it- what sorts of stuff would you need for that? memory? storage of user input to be accessed later?? 